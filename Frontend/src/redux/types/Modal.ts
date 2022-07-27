import { AuthActionTypes, LoadingActionTypes } from "../store/action/actionTypes"
import { User } from './users';


export interface ModalState {
    token: string,
    user: User,
    loading: boolean,
    error: string,
    success: string
}

interface LoginAction {
    type: AuthActionTypes.LOGIN,
    payload: ModalState
}

interface LoadingModal {
    type: LoadingActionTypes.LOADING
    payload: ModalState
}

interface LogOut {
    type: AuthActionTypes.LOGOUT
}

interface ErrorAction {
    type: AuthActionTypes.ERROR,
    payload: string
}

export type ModalAction = LoginAction | LoadingModal | LogOut | ErrorAction