import * as React from 'react'
import { Link } from 'react-router-dom'
import LoginLogic from './Login.logic'
import styled from 'styled-components'
import Button from '../../shared/Button'



export const LoginWrapper = styled.div`
    width: 100%;
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content:  center;
    align-items: center;
`

export const Form = styled.form`
  display: block;
  width: 300px;
  padding: 0 2em;
  box-shadow: 10px 10px 10px #ddd;
  /* background-color: red; */
`

export const FormTitle = styled.h3`
  margin-bottom: 1em;
  text-align: center;
`

export const FormError = styled.p`
  color: red;
  margin-bottom: 1em;
  font-size: 14px;
  font-weight: bold;
`

export const Input = styled.input<any>`
  display: block;
  width: 100%;
  margin: 2em 0;
  padding: 0.5em;
  height: 55px;
  position: relative;
  outline-width: none;
  outline: none;
  border: none;
  border-bottom: 1px solid #999;
  @media(max-width: 500px) {
    margin: 1em 0;
  }
`

export const ButtonWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: center;
`

export const BottomInfoText = styled.p`
  font-size: 0.7em;
  font-weight: bold;
  margin: 2em 0;
`



type Props = {}
const Login:React.FC = ({} :Props):JSX.Element => {
const {handleLogin, error, email, setEmail,
    password, setPassword
} = LoginLogic()

return(
    <React.Fragment>
        <LoginWrapper>
                <Form>
                    <FormTitle>Login</FormTitle>
                    <FormError>{error.message || ''}</FormError>
                    <Input type="text" placeholder="Email" value={email} onChange={ (event:React.FormEvent<HTMLInputElement>) => setEmail(event.target.value)}/>
                    <Input type="password" placeholder="Password" value={password} onChange={ (event:React.FormEvent<HTMLInputElement>) => setPassword(event.target.value)} />
                    <BottomInfoText>No Account? <Link to='/register'>Register here.</Link></BottomInfoText>
                    <ButtonWrapper>
                            <Button onClick={(event) => handleLogin(event)}>Login</Button>
                    </ButtonWrapper>
                </Form>
            </LoginWrapper>
    </React.Fragment>
    )
}

export default Login