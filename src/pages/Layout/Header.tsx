import * as React from 'react'
import { getItemFromSession } from '../../lib'
import HeaderLogic from './Header.logic'
import styled from 'styled-components'
import Logo from '../../shared/Logo'
import Button from '../../shared/Button'



const Container = styled.div`
    width: 100%;
    max-width: 2000px;
    margin: 0 auto;
    height: 10vh;
    padding: 0 2em;
    @media(max-width: 400px) {
        padding: 0 1em;
    }
`

const HeaderTag = styled.div`
    width: 100%;
    text-align: left;
    display: flex;
    align-items: center;
`
const LogoSection = styled.div`
    width: 180px;
    @media(max-width: 400px) {
        max-width: 120px;
    }
`



const ButtonsSection = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`


type Props = {}
const Header:React.FC = ({} :Props):JSX.Element => {
    const {handleLogout} = HeaderLogic()

    return(
        <React.Fragment>
            <Container>
                <HeaderTag>
                    <LogoSection>
                        <Logo />
                    </LogoSection>
                    { getItemFromSession('isLoggedIn') && (
                    <ButtonsSection>
                            <Button onClick={() => handleLogout() }>Log out</Button>
                    </ButtonsSection>
                    ) }
                </HeaderTag>
            </Container>
        </React.Fragment>
)
}

export default Header