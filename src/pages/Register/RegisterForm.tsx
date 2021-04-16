import * as React from 'react'
import RegisterLogic from './Register.logic'
import {registrationSchema} from './validation'

import {
    Form,
    FormTitle,
    FormError,
    Input,
    BottomInfoText,
    ButtonWrapper
} from '../Login/Login.ui'

import Button from '../../shared/Button'
import { Link } from 'react-router-dom'
import { FieldHookConfig, Formik, useField, ErrorMessage} from 'formik'
import styled from 'styled-components'


const CustomErrorMessage = styled.p<any>`
    display: block;
    color: red;
    position: absolute;
    top: -10%;
    font-size: 0.7em;
`

const InputWrapper = styled.div`
    position: relative;
`

const FormInput = (props :FieldHookConfig<any> ) => {

    const [field] = useField<FieldHookConfig<any>>(props)

    return(
        <InputWrapper>
            <Input {...field} {...props} />
            <ErrorMessage component={CustomErrorMessage} name={field.name} />
        </InputWrapper>
    )
}


const RegisterForm :React.FC = ():JSX.Element => {

    const { handleRegister, error} = RegisterLogic()

return(
    <React.Fragment>
        <Formik 
            initialValues={{
                email: '',
                password: '',
                passwordConfirmation: '',
                username: ''
            }}
            validationSchema={registrationSchema}
            onSubmit={() => console.log("")}
        >
            { ({values, isValid, isSubmitting, handleChange}) => (
                <Form onSubmit={(event) => {handleRegister(event, values);}}>
                    <FormTitle>Join Us!</FormTitle>
                    <FormError>{error.message || ''}</FormError>
                    <FormInput name="email" type="text" placeholder="Email" onChange={handleChange} />
                    <FormInput name="password" type="password" placeholder="Password" />
                    <FormInput name="passwordConfirmation" type="password" placeholder="Repeat Password" />
                    <FormInput name="username" type="text" placeholder="Display Name" />
                    <BottomInfoText>Have Account? <Link to='/login'>Login here.</Link></BottomInfoText>
                    {/* <pre>
                        {JSON.stringify(values, null, 4)}
                    </pre> */}
                    <ButtonWrapper>
                        <Button disabled={!isValid || isSubmitting} type="submit">
                            {isValid  ? ('Join!') : ('Disabled')}
                        </Button>
                    </ButtonWrapper>
                </Form>
            )}
        </Formik>
    </React.Fragment>
)
}

export default RegisterForm