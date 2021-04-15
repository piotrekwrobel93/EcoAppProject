import * as React from 'react'
import styled, {css} from 'styled-components'

type ButtonProps = {
    isDisabled?: boolean
}
const _Button = styled.button<ButtonProps>`

    width: 130px;
    padding: 1em;
    margin: 1em;
    border: 1px solid transparent;
    border-radius: 10px;
    background-color: #40d812;
    color: #fff;
    font-weight: bold;
    align-self: flex-end;
    outline: none;
    outline-width: 0;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease;
    :disabled {
        background: #333;
    }
    &:not([disabled]) {
        &:hover {
            background-color: #fff;
            color: #40d812;
            border: 1px solid #40d812;
            border-radius: 10px;
            box-shadow: 3px 3px 2px #ddd;
        }
    }
    @media(max-width: 400px) {
        width: 100px;
        font-size: 1em;
    }
`
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    
}
const Button = ({children, ...props}:Props) => {
    return(
        <React.Fragment>
         <_Button {...props} >
                { children }
        </_Button>   
        </React.Fragment>
    )
}


export default Button