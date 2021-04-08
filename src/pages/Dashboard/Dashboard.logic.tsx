import {useAppSelector } from "../../redux/ducks/user"
import { Error, Note } from "../../redux/ducks/userTypes"

type ReturnProps = {
    displayName: string,
    ecoPoints: number,
    completedNotes: Note[],
    isLoggedIn: boolean,
    newNotes: Note[],
    isLoading: boolean,
    error: Error
}
// LOGIC HOOK
export default ():ReturnProps => {

    const { displayName,ecoPoints,completedNotes,isLoggedIn,newNotes,isLoading,error } = useAppSelector( state => state.user )


    return {
        displayName,ecoPoints,completedNotes,isLoggedIn,newNotes,isLoading,error
    }
}