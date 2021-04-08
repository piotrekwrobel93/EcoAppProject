import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../store'
import {
        is_loading, login_user_failure,
        login_user_success,
        logout_user,
        register_user_success,
        register_user_failure,
        update_user_success,
        add_completed_note_success
} from './user.actions'
import {ThunkAction} from 'redux-thunk'
import {UserSchema, Action, Payload, Note, RegisterFunciton} from './userTypes'
import {auth, db} from '../../firebase'
 

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// ACTION TYPES 
const LOGIN_USER_SUCCESS = 'LOGIN_USER_SUCCESS' 
const LOGIN_USER_FAILURE = 'LOGIN_USER_FAILURE' 
const LISTEN_ON_USER_SUCCESS = 'LISTEN_ON_USER_SUCCESS' 
const LISTEN_ON_USER_FAILURE = 'LISTEN_ON_USER_FAILURE' 
const LOGOUT_USER = 'LOGOUT_USER'
const IS_LOADING = 'IS_LOADING'
const REGISTER_USER_SUCCESS = 'REGISTER_USER_SUCCESS'
const REGISTER_USER_FAILURE = 'REGISTER_USER_FAILURE'
const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS'
const ADD_COMPLETED_NOTE_SUCCESS = 'ADD_COMPLETED_NOTE_SUCCESS'

const {displayName,ecoPoints, newNotes,completedNotes}= JSON.parse(window.localStorage.getItem("localUserData") || '{}')

const initialState:UserSchema = {
    isLoggedIn: false,
    displayName,
    ecoPoints,
    completedNotes,
    newNotes,
    error: {message: ''},
    globalError: '',
    isLoading: false,
}

// THUNKS

export function addCompletedNote(note: Note) {

    return async function(dispatch: AppDispatch) {

        let currentUserUID:string | undefined = auth.currentUser?.uid

        try {
            db.collection('users').doc(currentUserUID).get()
                .then( doc => {
                    // COMPOSE NEW DATA FOR DB
                    let newPoints = doc.data()?.ecoPoints + 10
                    let newNotes = [...doc.data()?.completedNotes, note.id]
                    // INSERT TO DB
                    db.collection('users').doc(currentUserUID).update({ecoPoints: newPoints})
                    db.collection('users').doc(currentUserUID).update({completedNotes: newNotes})
                    // DISPATCH 
                    dispatch(add_completed_note_success())
                })
                .catch( (err) => console.log(err.message))

        } catch (err) { 
            console.log(err.message) 
        } 
    }
}

export function updateUser():ThunkAction<void, RootState, unknown, Action> {

    return async function(dispatch: AppDispatch) {
        // FETCHING ALL NOTES FROM API
        const response = await fetch('https://peter-notes-api.herokuapp.com/notes', {method: "post"})
        const data:Note[] = await response.json()

        let CID = auth.currentUser?.uid  // CURRENT IDENTIFIER

        db.collection('users').doc(CID).onSnapshot( doc => {

            // DOC.DATA REPRESENTS USER DATA FROM FIRESTORE
            // NOW WE NEED TO FILTER THE NOTES FETCHED FROM API AS WE STORE THEIRS IDs
            let __completedNotes = data.filter( note => {
                let filteredCompletedNotes // RESULTS
                doc.data()?.completedNotes.forEach( (item:number) => {
                    if (note.id === item) {
                        return filteredCompletedNotes = item
                    }
                })
                return note['id'] === filteredCompletedNotes 
            })
            // SAME FOR NEW NOTES
            let __notes =data.filter( note => {
                let obj
                doc.data()?.completedNotes.forEach( (item:number) => {
                    if  (note.id === item) {
                        return obj = item
                    } 
                })
                return note['id'] !== obj
            })

            const userData = doc.data()
            const results = { ecoPoints: userData?.ecoPoints, displayName: userData?.displayName,
                            newNotes: [...__notes], completedNotes: [...__completedNotes] }
            // SAVE TO LOCALSTORAGE FOR BETTER LOADING PERFORMANCE AND STORE PERSISTENCE
            window.localStorage.setItem("localUserData", JSON.stringify(results))
            // DISPATCH
            dispatch(update_user_success(results))
        })
    }
}

export const login = (email:string,password:string):ThunkAction<void, RootState, unknown, Action> => {

    return async ( dispatch ) => {
        // DISPATCH WAITING FOR RESPONSE TO AVOID SCREEN FLICKERING
        dispatch(is_loading(true))

        return auth.signInWithEmailAndPassword(email, password)
            .then( user => { 
                if (user) {
                    // SAVE MACRO-DATA TO LOCALSTORAGE SO AFTER DISPATCH WE CAN RETRIEVE IT 
                    // IN USE-EFFECT HOOK 
                    // ITS BEEING DELETED RIGHT AFTER READ ON COMPONENT MOUNT HOOK 
                    window.localStorage.setItem("sur", "true")
                    // DISPATCH
                    dispatch(login_user_success()) 
                 } else {
                      dispatch(login_user_failure({message: "Wrong credentials"}))
                 }
                dispatch(is_loading(false))
            })
            .catch( err => {
                dispatch(login_user_failure({message: err.message }))
                dispatch(is_loading(false))
            })
    }
    // 
}

export const logout = () => async (dispatch :AppDispatch) => {
    // CLEAR LOCALSTORAGE
    window.localStorage.removeItem("jwt")
    window.localStorage.removeItem("localUserData")
    // LOG OUT
    auth.signOut()
    dispatch(logout_user())
}


export const register:RegisterFunciton = (
    email:string,password: string, username: string,
) => async (dispatch :AppDispatch) => {

    dispatch(is_loading(true))
    try {
        await auth.createUserWithEmailAndPassword(email,password)
        .then( (user) => {
            // USER CREDENTIALS
            if (user) {
                    const CID = auth.currentUser?.uid // CURRENT USER ID
                    window.localStorage.setItem("sur", "true")
                    // SAVING USER TO FIRESTORE
                    db.collection('users').doc(CID).set({displayName: username,ecoPoints: 0, completedNotes: []})

                    dispatch(register_user_success(username))
                    dispatch(is_loading(false))
                }
            }).catch( err => {
                // 
                dispatch(register_user_failure(err))
                dispatch(is_loading(false))
    })
        } catch (err) { dispatch(register_user_failure(err));}
}


export default (state:UserSchema = initialState, action:Action) => {

    // DESTRUCT FROM ACTION
    const {payload}:Payload = action


    switch (action.type) {
        case LOGIN_USER_SUCCESS:    
            return { ...state, isLoggedIn: true, error: { message: ''} }

        case LOGIN_USER_FAILURE: 
            return { ...state, error: {message: payload.message}}

        case LISTEN_ON_USER_SUCCESS:
            return { ...state,isLoggedIn: true, error: { message: ''}, completedNotes: [payload.completedNotes]}

        case LISTEN_ON_USER_FAILURE:
            return { ...state, isLoggedIn: false }

        case LOGOUT_USER:
            return {
                ...initialState,
                displayName: '',
                ecoPoints: 0,
                completedNotes: [],
                newNotes: [],
                error: {message: ''},
                globalError: '',
            }

        case IS_LOADING: 
            return { ...state, isLoading: payload}
            
        case REGISTER_USER_SUCCESS:
            return {
                ...state, isLoggedIn: true, displayName: payload, error: { message: ''}
            }

        case REGISTER_USER_FAILURE:
            return { ...state, error: { message: payload.message } }

        case UPDATE_USER_SUCCESS:
            // DESTRUCT FROM PAYLOAD
            const {displayName, ecoPoints, completedNotes, newNotes,} = payload
            return {
                ...state,
                    displayName: displayName, ecoPoints, completedNotes, newNotes, isLoggedIn: true
            }

        case ADD_COMPLETED_NOTE_SUCCESS:
            return {...state }
    }
    return state
}