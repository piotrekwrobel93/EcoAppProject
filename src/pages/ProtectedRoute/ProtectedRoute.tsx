import * as React from 'react'
import { getItemFromSession } from '../../lib'
import Dashboard from '../Dashboard/Dashboard.ui'
import NotFound from '../NotFound'

type Props = {}
const ProtectedRoute:React.FC<Props> = ({} :Props):JSX.Element => {
    return(
        <React.Fragment>

            {getItemFromSession('isLoggedIn') ? <Dashboard /> : <NotFound/>}
        </React.Fragment>
    )
}

export default ProtectedRoute