import { ModalAction, ModalState } from "../../../types/Modal"
import { AuthActionTypes, LoadingActionTypes } from "../../action/actionTypes"


const initialState: ModalState = {
    token: '',
    user: {
        _id: '',
        username: '',
        passwodr: '',
        roles: [],
        number: '',
        city: '',
        company: ''
    },
    loading: false,
    error: '',
    success: ''
}

export const authReducer = (state = initialState, action: ModalAction): ModalState => {
    switch(action.type) {
        case AuthActionTypes.LOGIN:
            return {
                ...state,
                token: action.payload.token,
                user: action.payload.user,
                error: ''
            }
        case AuthActionTypes.LOGOUT:
            return {
                ...state,
                token: '',
                user: {
                    _id: '',
                    username: '',
                    passwodr: '',
                    roles: [],
                    number: '',
                    city: '',
                    company: ''
                },
                error: ''
            }
        case AuthActionTypes.ERROR:
            return {
                ...state,
                error: action.payload
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