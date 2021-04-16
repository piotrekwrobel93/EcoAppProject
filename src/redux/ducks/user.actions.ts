import { Action, ActionCreator } from './userTypes'

// ACTION CREATORS

export const login_user_success:ActionCreator = (payload):Action => ({type:'LOGIN_USER_SUCCESS', payload})
export const login_user_failure:ActionCreator = (payload:Error):Action => ({type:'LOGIN_USER_FAILURE', payload})
export const logout_user:ActionCreator = ():Action => ({type:'LOGOUT_USER'})
export const listen_on_user_success:ActionCreator = ():Action => ({type:'LISTEN_ON_USER_SUCCESS'})
export const listen_on_user_failure:ActionCreator = ():Action => ({type:'LISTEN_ON_USER_FAILURE'})
export const is_loading:ActionCreator = (payload:boolean):Action => ({type:'IS_LOADING', payload})
export const register_user_success:ActionCreator = (payload):Action => ({type:'REGISTER_USER_SUCCESS',payload})
export const register_user_failure:ActionCreator = (payload:Error):Action => ({type:'REGISTER_USER_FAILURE',payload})
export const update_user_success:ActionCreator = (payload:any):Action => ({type:'UPDATE_USER_SUCCESS',payload})
export const update_user_failure:ActionCreator = (payload:any):Action => ({type:'UPDATE_USER_SUCCESS',payload})
export const add_completed_note_success:ActionCreator = (payload:any):Action => ({type:'ADD_COMPLETED_NOTE_SUCCESS',payload})
export const set_current_pagination_index:ActionCreator = (payload:any):Action => ({type:'SET_CURRENT_PAGINATION_INDEX',payload})
export const set_current_category:ActionCreator = (payload:any):Action => ({type:'SET_CURRENT_CATEGORY',payload})
export const set_current_limit:ActionCreator = (payload:any):Action => ({type:'SET_CURRENT_LIMIT',payload})
export const set_global_error:ActionCreator = (payload:any):Action => ({type:'SET_GLOBAL_ERROR',payload})
