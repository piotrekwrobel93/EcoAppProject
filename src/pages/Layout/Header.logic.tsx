import * as React from 'react'
import { useDispatch } from "react-redux"
import { logout, useAppSelector } from "../../redux/ducks/user"
import {useHistory} from 'react-router-dom'
type ReturnProps = {
    handleLogout: () => void ,
    isLoggedIn: boolean,
}
export default ():ReturnProps => {
    const [showHeader, setShowHeader] = React.useState(false) 
    const {isLoggedIn} = useAppSelector( state => state.user)
    const dispatch = useDispatch()
    const history = useHistory<any>()
    const handleLogout = () => {
        dispatch(logout())
        history.push("/")
        window.sessionStorage.removeItem("isLoggedIn")
    }



    return {handleLogout, isLoggedIn}
}