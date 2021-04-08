import { AppDispatch } from "../store"


export type Error = { message: string }
export interface Notes {
    id: number,
    title: string,
    mainImage: string,
    textImage: string,
    content: string,
}
export interface UserSchema {
    isLoggedIn: boolean,
    displayName: string,
    ecoPoints: number,
    completedNotes: Notes[],
    newNotes: Notes[],
    error: Error,
    globalError: string,
    isLoading: boolean
}

export interface Note {
    id: number,
    mainImage: string,
    textImage: string,
    content: string,
    title: string,
}

export type Payload = any
export type ActionType = string
export type AsyncAction = (dispatch: AppDispatch) => Promise<void>
export type Action = { type: string, payload?: Payload}
export type ActionCreator = (payload?:Payload) => Action
export type Thunk = () => (dispatch: AppDispatch) => Promise<Action>

export type UserCredentialsRegister = {
    username :string,
    password :string,
    email: string
}

export type RegisterFunciton = (
    email: string,
    username: string,
    password: string
) => (dispatch :AppDispatch) => Promise<any> 



export type UseState<T> = React.Dispatch<React.SetStateAction<T>>
export type ButtonEvent = React.MouseEvent<HTMLButtonElement>
