import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { getItemFromSession } from '../../lib'
import Button from '../../shared/Button'
import Illustration from '../../shared/icons/Illustration'


const Wrapper = styled.div`
    display: flex;
    height: 80vh;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`
const Main = styled.main`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    @media( max-width: 400px) {
        font-size: 0.8em;
        margin-top: 3em;
    }
`

const Bottom = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
const MButton = styled(Button) `
    margin: 1em;
`

const HeroTypo = styled.h1`
`
const SubHeroTypo = styled.div`
    text-align: center;
`
const SubHeroTypoPTag = styled.p`
    font-weight: bold;
    @media( max-width: 450px) {
        padding: 0 1em;
    }
`
const Absolute = styled.div`
    z-index: -1;
    opacity: 1;
`
const CenteredButton = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
`


const Homepage:React.FC = ():JSX.Element => {

return(
    <div>
        <Wrapper>
            <Main>
                <HeroTypo>Save The Earth!</HeroTypo>
            <Absolute>
            </Absolute>
            <div>
                <Illustration width={200} />
            </div>
                <SubHeroTypo>
                    <SubHeroTypoPTag>Think before ... Be happy after</SubHeroTypoPTag>
                    <SubHeroTypoPTag>Join to find out if you are Eco Friendly! It's free!</SubHeroTypoPTag>
                </SubHeroTypo>
            </Main>
            <Bottom style={{display: getItemFromSession('isLoggedIn') ? "none" : "block"}}>
                <CenteredButton style={{display: "flex"}}>
                    <Link to="/register">
                        <MButton>Register</MButton>
                    </Link>
                    <Link to="/login">
                        <MButton>Log In</MButton>
                    </Link>
                </CenteredButton>
            </Bottom>

            {getItemFromSession('isLoggedIn') && (
                <Bottom>
                    <h3><span
                        style={{ textShadow: "1px 1px 0px #000"}}
                    >You are green!</span></h3>
                    <div>
                        <Link to='/dashboard'>
                            <MButton>Dashboard</MButton>
                        </Link>
                    </div>
                </Bottom>
            )}
        </Wrapper>
    </div>
    )
}

export default Homepage