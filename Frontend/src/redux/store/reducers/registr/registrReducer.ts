import { RegistrAction, RegistrState } from "../../../types/registr"
import { AuthActionTypes, LoadingActionTypes } from "../../action/actionTypes"


const initialState: RegistrState = {
    loading: false,
    error: '',
    success: ''
}

export const registrReducer = (state = initialState, action: RegistrAction): RegistrState => {
    switch(action.type) {
       case AuthActionTypes.REGISTRATION:
            return {
                ...state,
                success: action.payload,
                error: ''
            }
        case AuthActionTypes.ERROR:
            return {
                ...state,
                error: action.payload,
                success: ''
            }
        case LoadingActionTypes.LOADING:
            return {
                ...state,
                loading: !state.loading
            }
        default:
            return state
    }
}