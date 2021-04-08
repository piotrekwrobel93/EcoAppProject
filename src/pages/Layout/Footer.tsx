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
    z-index: -1;
`


type Props = {}
const Footer:React.FC = ({} :Props):JSX.Element => {

return(
    <React.Fragment>
        <FooterElement>
            <h3><a href="https://peter-sparrow.netlify.app/">-- Created by Piotr Wrobel -- </a></h3>
        </FooterElement>
    </React.Fragment>
)
}

export default Footer