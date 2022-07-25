import { UserActionTypes } from "../../action/actionTypes"
import { UserAction, UserState } from '../../../types/users';


const initialState: UserState = {
    users: []
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch(action.type) {
        case UserActionTypes.FETCH_USERS:
            return {
                users: action.payload
            }
        default:
            return state
    }
}