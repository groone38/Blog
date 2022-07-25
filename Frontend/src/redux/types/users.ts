import { UserActionTypes } from "../store/action/actionTypes";

export interface User {
    _id: string
    username: string
    passwodr: string
    roles: []
}

export interface UserState{
    users: User[]
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
    payload: User[]
}

export type UserAction = FetchUserAction