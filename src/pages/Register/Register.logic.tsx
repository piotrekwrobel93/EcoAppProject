import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { register, useAppSelector } from "../../redux/ducks/user"
import { register_user_failure } from "../../redux/ducks/user.actions"
import { Error, UseState } from "../../redux/ducks/userTypes"
import DashboardLogic from "../Dashboard/Dashboard.logic"


type RegisterProps = {
    email: string,
    password: string,
    passwordConfirmation: string;
    username: string
}

type ReturnProps = {
    setEmail: UseState<string>,
    setUsername: UseState<string>,
    setPassword: UseState<string>,
    setPasswordConfirmation: UseState<string>,
    email: string,
    username: string,
    password: string,
    passwordConfirmation: string,
    handleRegister: (event: React.FormEvent<HTMLFormElement>, values:RegisterProps) => void
    error: Error,
    formData: RegisterFormData,
}


type RegisterFormData = {
    email: string,
    password: string,
    passwordConfirmation: string,
    username: string,
}


export default ():ReturnProps => {
    
    const {setUrl} = DashboardLogic()

    const [email,setEmail] = React.useState<string>('')
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [passwordConfirmation, setPasswordConfirmation] = React.useState<string>('')
    const {error} = useAppSelector( state => state.user )
    const dispatch = useDispatch()
    const history = useHistory()

    const formData :RegisterFormData = {
        email,
        password,
        passwordConfirmation,
        username
    } 

    const handleRegister = (event: React.FormEvent<HTMLFormElement>, values: RegisterProps) => {
        event.preventDefault()

        const {email, password, username} = values
        dispatch(register(email,password,username))
            .then(() => {
                if (window.localStorage.getItem("sur")) {
                    window.localStorage.removeItem("sur")
                    history.push(setUrl(1, 'new', 2))
                }
            }).catch( (err:any) => dispatch(register_user_failure(err)))
    }
    return {
        setEmail, setUsername, setPassword, email, username, password, handleRegister, error, passwordConfirmation, 
        setPasswordConfirmation, formData
    }
}
