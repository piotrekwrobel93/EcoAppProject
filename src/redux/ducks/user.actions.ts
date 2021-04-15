import { Action, ActionCreator } from './userTypes'

// ACTION CREATORS

export const login_user_success:ActionCreator = (payload):Action => ({type:'LOGIN_USER_SUCCESS', payload})
export const login_user_failure:ActionCreator = (payload:Error):Action => ({type:'LOGIN_USER_FAILURE', payload})
export const logout_user:ActionCreator = ():Action => ({type:'LOGOUT_USER'})
export const listen_on_user_success:ActionCreator = ():Action => ({type:'LISTEN_ON_USER_SUCCESS'})
export const listen_on_user_failure:ActionCreator = ():Action => ({type:'LISTEN_ON_USER_FAILURE'})
export const is_loading:ActionCreator = (payload:boolean):Action => ({type:'IS_LOADING', payload})
export const register_user_success:ActionCreator = (payload):Action => ({type:'REGISTER_USER_SUCCESS',payload})
export const register_user_failure:ActionCreator = (payload:Error):Action => ({type:'REGISTER_USER_FAILURE',payload})
export const update_user_success:ActionCreator = (payload:any):Action => ({type:'UPDATE_USER_SUCCESS',payload})
export const update_user_failure:ActionCreator = (payload:any):Action => ({type:'UPDATE_USER_SUCCESS',payload})
export const add_completed_note_success:ActionCreator = (payload:any):Action => ({type:'ADD_COMPLETED_NOTE_SUCCESS',payload})