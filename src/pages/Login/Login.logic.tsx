import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router'
import { login, useAppSelector } from '../../redux/ducks/user'
import { login_user_failure } from '../../redux/ducks/user.actions'
import { Error, UseState } from '../../redux/ducks/userTypes'
import DashboardLogic from '../Dashboard/Dashboard.logic'

type ReturnProps = {
    handleLogin: (event: React.MouseEvent<HTMLButtonElement>) => void
    error: Error,
    email: string,
    password: string,
    setEmail: UseState<string>,
    setPassword: UseState<string>,
    
}

export default ():ReturnProps => {
    
    // REDUX
    const {error} = useAppSelector( state => state.user )
    const dispatch = useDispatch()
    const {setUrl} = DashboardLogic()
    // UI
    const [email, setEmail] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const history = useHistory()

    const handleLogin = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        if (email && password && email.includes("@") && email.includes(".") && 
            email.length > 5 && password.length > 5) {
                dispatch(login(email, password))
                .then(() => {
                    if (window.localStorage.getItem("sur")) {
                        window.localStorage.removeItem("sur")
                        history.push(setUrl(1, 'new', 2))
                    } 
                })
                
        } else {
            dispatch(login_user_failure({message:'bud creds mate'}))
        }
    }
    return {
        handleLogin, error, email, setEmail, password, setPassword
    }
}
