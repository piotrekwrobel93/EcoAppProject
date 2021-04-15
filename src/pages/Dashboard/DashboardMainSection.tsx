import * as React from 'react'
import DashboardLogic from './Dashboard.logic'
import styled from 'styled-components'
import Button from '../../shared/Button'
import Box from './Box'
import SadFaceIcon from '../../shared/icons/SadFace'
import HappyFaceIcon from '../../shared/icons/HappyFace'


export const ShadowedText = styled.span`
    text-shadow: 1px 1px 0px #000;
`

const TypoMain = styled.span`
    display: block;
    text-align: center;
    visibility: hidden;
    height: 150px;
    animation: animation2 1s ease forwards 0.5s;
    font-size: 2em;
    font-weight: bold;
    @media(max-width: 768px) {
        margin-top: 1em;
    }
`

const MainSection = styled.div`

`

const ButtonContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    margin: 0 auto 2em auto;
    animation: animation3 1s ease forwards 1s;
    visibility: hidden;

`

const BoxContainer = styled.div`
    width: 100%;
    height: 100%;
    min-height: 20vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    visibility: hidden;
    animation: animation3 1s ease forwards 1s;
`

const SubTypoMain = styled(TypoMain)`
    font-size: 0.5em;
`

const Empty = styled.div`
    display: flex;
`



const DashboardMain:React.FC = ():JSX.Element => {

    const [activeTab, setActiveTab] = React.useState<boolean>(false)
    const {completedNotes, isLoading, newNotes} = DashboardLogic()
    
    return(
        <React.Fragment>
            <TypoMain>Your <span style={{color: "#40d812"}}>Eco</span>-Books
                <SubTypoMain>Read to gain more knowledege<br />and get EcoPoints!</SubTypoMain>
            </TypoMain>

            <MainSection>
                <ButtonContainer>
                    <Button onClick={() => setActiveTab(false)}>New</Button>
                    <Button onClick={() => setActiveTab(true)}>Completed</Button>
                </ButtonContainer>
                <BoxContainer>
                {
                    activeTab ? (
                        completedNotes.length > 0 ? (
                            completedNotes.map((item) => (
                                <Box active={activeTab}  completed={true} key={item.id} note={item} />
                            ))
                            ) : (
                                isLoading ? (
                                    <p>Loading...</p>
                                ) : (
                                    <Empty style={{ display: "flex"}}>
                                        <p style={{marginRight: "10px"}}><ShadowedText>Whoops!</ShadowedText>Nothing in here</p>
                                        <SadFaceIcon width={30} height={30} fill="#000" />
                                    </Empty>
                                )
                            )
                    ) : (
                        newNotes.length > 0 ? (
                            newNotes.map((item, index )=> (
                                <Box key={item.id} note={item}/>
                            ))
                            ) : (
                            isLoading ? (<p>Loading...</p>) : (
                                <Empty style={{ display: "flex"}}>
                                    <p style={{marginRight: "10px"}}><ShadowedText>Hoooray!</ShadowedText> You did all!</p>
                                    <HappyFaceIcon width={30} height={30} fill="#000" />
                                </Empty>
                            )
                        )
                    )
                }   

                </BoxContainer>
            </MainSection>
        </React.Fragment>
    )
}

export default DashboardMain   