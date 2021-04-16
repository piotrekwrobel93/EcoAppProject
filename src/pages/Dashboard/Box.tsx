import * as React from 'react'
import styled from 'styled-components'
import { Note } from '../../redux/ducks/userTypes'
import CheckIcon from '../../shared/icons/CheckIcon'
import Modal from '../../shared/Modal'

const BoxElement = styled.div`
    width: 300px;
    height: 300px;  
    background-color: #222;
    box-shadow: 2px 2px 10px #999;
    margin: 1em;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    outline-width: 0;
    &:hover {
        transform: scale(0.96);
    }
`
const Image = styled.img`
    display: block;
    object-fit: cover;
    transition: opacity 0.3s ease;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 20%;
    position: absolute;
    bottom: 0; left: 0;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background-color: rgba(0, 0, 0, 1);
    transition: all 0.3s ease;
`

const TitleTypo = styled.h3`
    color: #fff;
    font-size: 0.9em;
    z-index: 9999;
`

const CheckMark = styled.span`
    position: absolute;
    top: 3%;
    right: 3%;
    z-index: 9;
`



type Props = {
    note: Note,
    active?: boolean,
    completed: boolean
}


// BOX COMPONENT
const Box:React.FC<Props> = ({note, completed} :Props):JSX.Element => {
    // const {}
    const [showModal, setShowModal] = React.useState<boolean>(false)

    return(
        <React.Fragment>
            <BoxElement onClick={() => setShowModal(true)} >
                <CheckMark>
                    { completed && <CheckIcon width={25} height={25}  />}
                </CheckMark>
                <Title>
                    <TitleTypo>{note.title}</TitleTypo>
                </Title>
                <Image src={note.mainImage} width="300" height="300" />
            </BoxElement>
        {showModal && <Modal note={note}  setShowModal={setShowModal} completed={completed} />}
        </React.Fragment>
    )
}

export default Box