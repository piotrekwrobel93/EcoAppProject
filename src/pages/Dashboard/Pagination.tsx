import React from 'react'
import Pagination from '@material-ui/lab/Pagination';
import { useDispatch } from 'react-redux';
import {set_current_pagination_index} from '../../redux/ducks/user.actions'
import { useAppSelector } from '../../redux/ducks/user';
import PaginationItem from '@material-ui/lab/PaginationItem';
import { Link } from 'react-router-dom';
import DashboardLogic from './Dashboard.logic';


type Props = {
    notesPerPage: number,
    totalNotes: number,
}



const CustomPagination:React.FC<Props> = ({notesPerPage, totalNotes } :Props):JSX.Element => {

    const dispatch = useDispatch()
    const {setUrl, currentPaginationIndex, category, limit} = DashboardLogic()

    let pages = []

    for (let i = 0; i < Math.ceil(totalNotes / notesPerPage); i++) {
        pages.push(i)
    }

    const handleChange = (event:any, value:any) => dispatch(set_current_pagination_index( value ))

return(
    <React.Fragment>
      <Pagination count={pages.length} onChange={handleChange} page={currentPaginationIndex} renderItem={
          (item) => (
            <PaginationItem shape='round' variant="text" style={{color: "#333"}} color="primary" component={Link}
                to={setUrl(item.page, category, limit)}    
                {...item}
            />
          )
      }/>
    </React.Fragment>
)
}

export default CustomPagination