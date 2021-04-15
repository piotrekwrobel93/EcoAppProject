import * as React from 'react'
import styled from 'styled-components'

const FooterElement = styled.footer`
    width: 100%;
    height: 10vh;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    animation: animation4 2s ease forwards 1s;
    position: relative;
    z-index: -10;
`


const Footer:React.FC = ():JSX.Element => {

return(
    <FooterElement>
        <a href="https://peter-sparrow.netlify.app/">-- Created by Piotr Wrobel -- </a>
    </FooterElement>
)
}

export default Footer