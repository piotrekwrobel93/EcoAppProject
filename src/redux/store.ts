import {combineReducers, createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './ducks/user'
import reduxThunk from 'redux-thunk'
import {Action} from './ducks/userTypes'
export const store = createStore(combineReducers({
    user
}), composeWithDevTools(applyMiddleware(reduxThunk)))


export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
export type AppDispatch = typeof store.dispatch


