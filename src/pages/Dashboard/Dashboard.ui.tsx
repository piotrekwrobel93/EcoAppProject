import * as React from 'react'
import DashboardLogic from './Dashboard.logic'
import styled from 'styled-components'
import DashboardMainSection from './DashboardMainSection'


const Wrapper = styled.div`
    width: 100vw;
    min-height: 80vh;
    height: 100%;
    padding: 3em 2em 1em 2em;
    @media(max-width: 420px) {
        padding: 3em 0.5em;
    }
`
const UserInfo = styled.div`
    width: auto;
    font-size: 0.55em;
    display:flex;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    transition: all .3s ease;
    @media(max-width: 420px) {
        margin-bottom: 1em;
    }
    `
const PointsWrapper = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
`

const EcoPoints = styled.h1`
    margin-left: 10px;
`

const Dashboard:React.FC = ():JSX.Element => {

    const {ecoPoints, displayName, isLoading} = DashboardLogic()
// JSX
return(
    <React.Fragment>
        <Wrapper>
            <UserInfo>
                <h1><span>Logged as:</span> {displayName}!</h1>
                <PointsWrapper>
                    <EcoPoints><span>EcoPoints:</span> {ecoPoints}</EcoPoints>
                </PointsWrapper>
            </UserInfo>
            { 
                isLoading ? (<p>Loading data...</p>) : (
                    <DashboardMainSection />

                )
            }
        </Wrapper>
    </React.Fragment>
)
}

export default Dashboard