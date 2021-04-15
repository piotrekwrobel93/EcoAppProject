import * as React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { addCompletedNote, useAppDispatch } from '../redux/ducks/user'
import { Note, UseState } from '../redux/ducks/userTypes'
import Button from './Button'
import CheckIcon from './icons/CheckIcon'

const ModalShadow = styled.div`
    width: 100vw;
    height: 100vh;
    max-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    overflow: hidden;
    top: 0%;
    left: 0%;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 99998;
    `


const ModalBox = styled.div`
    width: 100%;
    max-width: 1000px;
    max-height: 100vh;
    min-height: 80vh;
    overflow-y: scroll;
    overflow-x: hidden;
    position: relative;
    z-index: 99999;
    padding: 0em 2em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    @media(max-width: 768px) {
        padding: 2em 1.5em;
    }
    `
const ClosingIcon = styled.p`
    position: absolute;
    top: 5%;
    right: 5%;
    font-size: 1.5em;
    font-family: 'Segoe-UI', sans-serif;
    transform: scaleX(1.2);
    cursor: pointer;
`
const ModalContentWrapper = styled.div`
    width: 80%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    z-index: 99;
    @media(max-width: 420px) {
        width: 100%;        
    }
`
const ModalTitle = styled.h1`
    text-align: center;
    color: #40d812;
    @media(max-width: 768px) {
        font-size: 1.3em;
    }
    @media(max-width: 420px) {
        font-size: 1.2em;
    }
`
const SectionContent = styled.p`
`
const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin: 2em 0;
`
const Image = styled.img`
    margin: 2em 0;
    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
    }
    @media(max-width: 350px) {
        margin: 1em;
    }
`
const DisabledButton = styled(Button)`
    background-color: #fff;
    color: #333;
    border-color: #333;
    &:hover {
        color: #333;
        border-color: #333;
    }
`


type Props = {
    note: Note,
    setShowModal: UseState<boolean>,
    completed?: boolean,
}
const Modal:React.FC<Props> = ({note, setShowModal, completed} :Props):JSX.Element => {
    
    const dispatch = useDispatch()
    const handleCompleteNote = () => {
        dispatch(addCompletedNote(note))
    }

    React.useEffect( () => {
        document.body.style.overflowY = "hidden"
        return () => {
            document.body.style.overflowY = "visible"        
        }
    },[])

return(
    <React.Fragment>
            <ModalShadow>
                <ModalBox>
                    <ModalTitle>{note.title}</ModalTitle>
                    <Image width="250" height="250" src={note.textImage} />
                    <ClosingIcon onClick={() => setShowModal(false)}>X</ClosingIcon>
                    <ModalContentWrapper>
                    <SectionContent>
                        {note.content}
                    </SectionContent>
                        {
                            completed ? (
                                <ButtonWrapper>
                                    <DisabledButton>
                                        <CheckIcon style={{ marginRight: "5px"}} width={20} height={20} fill="#333" />
                                        Done
                                    </DisabledButton>
                                </ButtonWrapper>
                            ) : (
                                <ButtonWrapper>
                                    <Button onClick={ () => handleCompleteNote() }>Sure!</Button>
                                </ButtonWrapper>
                            )
                        }
                    </ModalContentWrapper>
                </ModalBox>
        </ModalShadow>
    </React.Fragment>
)
}

export default Modal