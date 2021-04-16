import * as React from 'react'
import DashboardLogic from './Dashboard.logic'
import styled from 'styled-components'
import DashboardMainSection from './DashboardMainSection'
import { set_current_category, set_current_limit, set_current_pagination_index, set_global_error } from '../../redux/ducks/user.actions'
import { useDispatch } from 'react-redux'


const Wrapper = styled.div`
    width: 100vw;
    max-width: 2000px;
    margin: 0 auto;
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

    const {ecoPoints, displayName, isLoading, totalNotes, notesPerPage, page, urlLimit, urlCategory} = DashboardLogic()
    const dispatch = useDispatch()



    React.useEffect( () => {
        const paginationItemsLength =  Math.ceil(totalNotes / notesPerPage)
        // CHECK IF PAGE EXISTS IN PAGINATION
        if ( page > paginationItemsLength && paginationItemsLength > 0 ) {

            page && dispatch(set_current_pagination_index(1))
            dispatch(set_global_error('The url isnt correct'))

            // CLEAR THE ERROR AFTER 3 SECONDS WHEN POP-UP SLIDES UP
            setTimeout( () => {
                dispatch(set_global_error(''))
            }, 3000)

        } else {
            urlLimit && dispatch(set_current_limit(urlLimit))
            urlCategory && dispatch(set_current_category(urlCategory))
            page && dispatch(set_current_pagination_index(page))
        }
    }, [])

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
            { isLoading ? <p>Loading data...</p> : <DashboardMainSection /> }
        </Wrapper>
    </React.Fragment>
)
}

export default Dashboard