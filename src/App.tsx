import * as React from 'react'
import {BrowserRouter as Router, Switch, Route, useHistory} from 'react-router-dom'
import Homepage from './pages/Homepage/Homepage.ui'
import Login from './pages/Login/Login.ui'
import NotFound from './pages/NotFound'
import Register from './pages/Register/Regiser.ui'
import {auth} from './firebase'
import { updateUser, useAppSelector } from './redux/ducks/user'
import {listen_on_user_success,listen_on_user_failure} from './redux/ducks/user.actions'
import Layout from './pages/Layout/Layout'
import ProtectedRoute from './pages/ProtectedRoute/ProtectedRoute'
import { getItemFromSession } from './lib'
import { useDispatch } from 'react-redux'


type Props = {}
const App:React.FC = ({} :Props):JSX.Element => {
    const {isLoading} = useAppSelector( state => state.user )
    const dispatch = useDispatch()
    React.useEffect( () => {
        auth.onAuthStateChanged( user => {
            if (user) {
                dispatch(updateUser())
                if (!window.sessionStorage.getItem('isLoggedIn'))
                !getItemFromSession('isLoggedIn') && window.sessionStorage.setItem('isLoggedIn',JSON.stringify(true))
            } else {
                dispatch(listen_on_user_failure())
            }
        })
    },[])

return(
    <Router>
        { !isLoading && 
        <div>
            <Layout>
                <Switch>
                    <Route exact path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/register">
                        <Register />
                    </Route>
                    <Route exact path="/">
                        <Homepage />
                    </Route>
                     <Route path="/dashboard">
                        <ProtectedRoute>
                        </ProtectedRoute>
                    </Route>
                    
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Layout>
        </div>
        }
    </Router>
)
}

export default App