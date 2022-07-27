import { UserActionTypes } from "../store/action/actionTypes";

export interface User {
    _id: string
    username: string
    passwodr: string
    roles: []
    number: string
    city: string
    company: string
}

export interface UserState{
    users: User[]
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS
    payload: User[]
}

export type UserAction = FetchUserAction