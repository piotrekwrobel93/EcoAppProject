import * as yup from 'yup'

const emailError = "Email isn't correct"
const passwordError = "password must be between 6-20 characters"
const confirmationError = "Passwords dont match"
const usernameError = "Must be at least 3 characters"

export const registrationSchema = yup.object().shape({
    email: 
        yup.string().email(emailError).required(),

    password: 
        yup.string().min(6, passwordError).max(20, passwordError).required(),

    passwordConfirmation: 
        yup.string()
        .oneOf([yup.ref('password'), null], confirmationError),

    username: 
        yup.string().min(3, usernameError).required()
})
