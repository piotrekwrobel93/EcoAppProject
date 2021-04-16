import * as React from 'react'
import {useAppSelector } from "../../redux/ducks/user"
import { Error, Note } from "../../redux/ducks/userTypes"
import qs  from 'query-string'
import { set_current_category, set_current_pagination_index } from '../../redux/ducks/user.actions'
import { useDispatch } from 'react-redux'

type ReturnProps = {
    displayName: string,
    ecoPoints: number,
    isLoggedIn: boolean,
    newNotes: Note[],
    isLoading: boolean,
    error: Error,
    notesPerPage: number,
    totalNotes: number,
    totalNewNotes: number,
    completedNotesPaginated: Note[],
    newNotesPaginated: Note[],
    urlQuery: any,
    currentPaginationIndex: number,
    category: string,
    setUrl: (pageParam: number, categoryParam: string, limitParam: number) => string,
    limit: number,
    globalError: string, 
    page: number,
    urlCategory: string | string[] | null,
    urlLimit: number, 
    handleNewButtonClick: () => void
    handleCompletedButtonClick: () => void
}



// LOGIC HOOK
export default ():ReturnProps => {
    // REDUX STATE SELECTOR
    const { displayName,ecoPoints,completedNotes,isLoggedIn,newNotes,isLoading, error, currentPaginationIndex, category, limit, globalError} = useAppSelector( state => state.user )

    //  GLOBAL LOGIC VARIABLE
    const setUrl = ( pageParam:number = currentPaginationIndex, categoryParam:string = category, limitParam:number = limit ) => {
        return `/dashboard?page=${pageParam}&category=${categoryParam}&limit=${limitParam}`
    }

    const {query : urlQuery} = qs.parseUrl(location.search)

    const page = parseInt(urlQuery.page)
    const urlLimit = parseInt(urlQuery.limit)
    const urlCategory = urlQuery.category
    

    // COMPONENT STATE
    const [notesPerPage] = React.useState<number>(urlLimit || limit)
    const lastNote = currentPaginationIndex * notesPerPage
    const firstNote = lastNote - notesPerPage
    const totalNotes = completedNotes.length
    const totalNewNotes = newNotes.length


    const dispatch = useDispatch()


    const handleNewButtonClick = () => {
        dispatch(set_current_category('new'))
        dispatch(set_current_pagination_index(1))  
    }

    const handleCompletedButtonClick = () => {
        dispatch(set_current_category('completed'))
        dispatch(set_current_pagination_index(1))
    }



    
    const newNotesPaginated = newNotes.slice(firstNote, lastNote)
    const completedNotesPaginated = completedNotes.slice(firstNote, lastNote)



    return {
        displayName,ecoPoints, completedNotesPaginated, isLoggedIn, newNotes, isLoading,
         error, notesPerPage, totalNotes, newNotesPaginated, totalNewNotes, urlQuery, currentPaginationIndex, category, setUrl, limit, globalError,
         page, urlLimit, urlCategory, handleNewButtonClick, handleCompletedButtonClick
    }
}