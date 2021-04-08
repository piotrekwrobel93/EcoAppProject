import React from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { register, useAppSelector } from "../../redux/ducks/user"
import { register_user_failure } from "../../redux/ducks/user.actions"
import { ButtonEvent, Error, UseState } from "../../redux/ducks/userTypes"


type ReturnProps = {
    setEmail: UseState<string>,
    setUsername: UseState<string>,
    setPassword: UseState<string>,
    setPassword2: UseState<string>,
    email: string,
    username: string,
    password: string,
    password2: string,
    handleRegister: (event:ButtonEvent) => void,
    error: Error,
}

export default ():ReturnProps => {

    const [email,setEmail] = React.useState<string>('')
    const [username, setUsername] = React.useState<string>('')
    const [password, setPassword] = React.useState<string>('')
    const [password2, setPassword2] = React.useState<string>('')
    const dispatch = useDispatch()
    const {error} = useAppSelector( state => state.user )
    const history = useHistory()
    const handleRegister = (event:ButtonEvent) => {
        event.preventDefault()
        if (typeof password === 'string' && email.includes("@") && email.includes(".")) {
            if (password.length > 4 && email.length > 4 && password === password2) {
                dispatch(register(email,password,username))
                    .then(() => {
                        if (window.localStorage.getItem("sur")) {
                            window.localStorage.removeItem("sur")
                            history.push("/dashboard")
                        } 
                    })
            } 
        } else {
            dispatch(register_user_failure({message: "Error! Check your credentials again"}))
        }
    }
    return {
        setEmail, setUsername, setPassword, email, username, password, handleRegister, error, password2, setPassword2
    }
}