import { AuthActionTypes, LoadingActionTypes } from "../store/action/actionTypes"


export interface RegistrState {
    loading: boolean
    error: string
    success: string    
}

interface RegistrationAction {
    type: AuthActionTypes.REGISTRATION
    payload: string
}

interface ErrorAction {
    type: AuthActionTypes.ERROR
    payload: string
}

interface LoadingAction {
    type: LoadingActionTypes.LOADING
    payload: boolean
}

export type RegistrAction = RegistrationAction | ErrorAction | LoadingAction
