import * as React from 'react'
import { Link } from 'react-router-dom'

type Props = {}
const NotFound:React.FC = ({} :Props):JSX.Element => {

return(
    <div>
        <h1>404 - Page Error</h1>
        <h3>Try to reconnect or navigate to <Link to="/">Home</Link></h3>
    </div>
)
}

export default NotFound