import * as React from 'react'
import DashboardLogic from './Dashboard.logic'
import styled from 'styled-components'
import Button from '../../shared/Button'
import Box from './Box'
import SadFaceIcon from '../../shared/icons/SadFace'
import CustomPagination from './Pagination'
import { Note } from '../../redux/ducks/userTypes'
import { Link } from 'react-router-dom'


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
const IconHolder = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    animation: animation3 1s ease forwards 1s;
    visibility: hidden;
    margin-bottom: 1em;
    svg {
        cursor: pointer;
            &:hover path {
            fill: green;
        }
    }
`
const ErrorBox = styled.div`
    position: fixed;
    top: 0;
    right: 5%;
    width: 200px;
    height: 100px;
    background: red;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1em;
    color: #fff;
    animation: animation5 0.5s ease 3s forwards;
`


const DashboardMain:React.FC = ():JSX.Element => {

    const {completedNotesPaginated, notesPerPage, totalNotes, newNotesPaginated, setUrl, totalNewNotes, limit, category, globalError, 
            handleNewButtonClick, handleCompletedButtonClick} = DashboardLogic()

    return(
        <React.Fragment>
            { globalError.length > 0 && 
                <ErrorBox>
                    <p>Ouuups!</p>
                    <p>{globalError}</p>
                </ErrorBox>
            }
            <TypoMain>Your <span style={{color: "#40d812"}}>Eco</span>-Books
                <SubTypoMain>Read to gain more knowledge<br />and some EcoPoints!</SubTypoMain>
            </TypoMain>
            <div>
                <ButtonContainer >
                    <Link to={setUrl(1,'new', limit)}>
                        <Button disabled={ category === 'new' && true } onClick={handleNewButtonClick}>New</Button>
                    </Link>
                    <Link to={setUrl(1,'completed', limit)}>
                        <Button disabled={category === 'completed' && true} onClick={handleCompletedButtonClick}>Completed</Button>
                    </Link>
                </ButtonContainer>
                <BoxContainer>
                {
                    category === 'completed' ? (
                        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                            <div style={{ width: "100%", display: "flex", maxWidth: "90vw", flexWrap: "wrap", justifyContent: "center", alignItems:"center"}}>
                                {
                                    completedNotesPaginated.length > 0 ? (
                                        completedNotesPaginated.map( (note:Note) => (
                                            <div key={note.id}>
                                                <Box note={note} completed={true} />
                                            </div>
                                        ))
                                    ) : (
                                        <React.Fragment>
                                            <SadFaceIcon />
                                            <p style={{ marginLeft: "0.5em"}}>Empty</p>
                                        </React.Fragment>

                                    )
                                }
                            </div>
                            { completedNotesPaginated.length > 0 && <CustomPagination notesPerPage={notesPerPage} totalNotes={totalNotes} /> }
                        </div>
                    ) : (
                        <div style={{display: "flex", flexDirection:"column", alignItems: "center"}}>
                            <div style={{ width: "100%", display: "flex", maxWidth: "90vw", flexWrap: "wrap", justifyContent: "center", alignItems:"center"}}>
                                {
                                    newNotesPaginated.length > 0 ? (
                                        newNotesPaginated.map( (note:Note) => (
                                            <div key={note.id}>
                                                <Box note={note} completed={false} />
                                            </div>
                                        ))
                                    ) : (
                                        <React.Fragment>
                                            <SadFaceIcon />
                                            <p style={{ marginLeft: "0.5em"}}>Empty</p>
                                        </React.Fragment>
                                    )
                                }
                            </div>
                            { newNotesPaginated.length > 0 && <CustomPagination notesPerPage={notesPerPage} totalNotes={totalNewNotes} /> } 
                        </div>
                    )
                }
                </BoxContainer>
            </div>
        </React.Fragment>
    )
}

export default DashboardMain   



/**
 * 
 * 
 * {
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
 * 
 */