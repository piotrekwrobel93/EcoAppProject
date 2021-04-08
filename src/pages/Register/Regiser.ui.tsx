import * as React from 'react'
import { Link } from 'react-router-dom'
import RegisterLogic from './Register.logic'
import {
    LoginWrapper,
    Form,
    FormTitle,
    FormError,
    Input,
    BottomInfoText,
    ButtonWrapper
} from '../Login/Login.ui'
import Logo from '../../shared/Logo'
import Button from '../../shared/Button'


type Props = {}
const Register:React.FC = ({} :Props):JSX.Element => {
const {setEmail, setUsername, setPassword, email, username, password, handleRegister, error, password2, setPassword2} = RegisterLogic()

return(
        <React.Fragment>
            <LoginWrapper>
                <Logo />
                <Form>
                    <FormTitle>Join Us!</FormTitle>
                    <FormError>{error.message || ''}</FormError>
                    <Input type="text" placeholder="Email" value={email} onChange={ event => setEmail(event.target.value)}/>
                    <Input type="password" placeholder="Password" value={password} onChange={ event => setPassword(event.target.value)} />
                    <Input type="password" placeholder="Repeat Password" value={password2} onChange={ event => setPassword2(event.target.value)} />
                    <Input type="text" placeholder="Display Name" value={username} onChange={ event => setUsername(event.target.value)} />
                    <BottomInfoText>Have Account? <Link to='/login'>Login here.</Link></BottomInfoText>
                    <ButtonWrapper>
                        <Button onClick={(event) => handleRegister(event)}>Join!</Button>
                    </ButtonWrapper>
                </Form>
            </LoginWrapper>
        </React.Fragment>
    )
}

export default Register