import * as React from 'react'
import {LoginWrapper} from '../Login/Login.ui'
import RegisterForm from './RegisterForm'

const Register:React.FC = ():JSX.Element => {

return(
        <React.Fragment>
            <LoginWrapper>
                <RegisterForm />
            </LoginWrapper>
        </React.Fragment>
    )
}

export default Register