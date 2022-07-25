import { ModalAction, ModalState } from "../../../types/Modal"
import { AuthActionTypes, LoadingActionTypes } from "../../action/actionTypes"


const initialState: ModalState = {
    token: '',
    user: {
        _id: '',
        username: '',
        passwodr: '',
        roles: [] 
    },
    loading: false
}

export const authReducer = (state = initialState, action: ModalAction): ModalState => {
    switch(action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user
            }
        case AuthActionTypes.LOGOUT:
            return {
                token: '',
                user: {
                    _id: '',
                    username: '',
                    passwodr: '',
                    roles: [] 
                },
                loading: false
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