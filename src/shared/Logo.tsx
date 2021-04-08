import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const CustomLogo = styled.h2`
    font-weight: 500;
    color: #222;
    font-size: 2em;
`
const SubLogo = styled.p`
    font-size: 0.9em;
`

const LogoSpan = styled.span`
    color: #40d812;
    font-weight: bold;
`


type Props = {}
const Logo:React.FC = ({} :Props):JSX.Element => {

return(
    <React.Fragment>
        <Link to="/">
            <CustomLogo><LogoSpan>Eco</LogoSpan>Planet</CustomLogo>
            <SubLogo>Save the greens</SubLogo>
        </Link>
        
    </React.Fragment>
)
}

export default Logo