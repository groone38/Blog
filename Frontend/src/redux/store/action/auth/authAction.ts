import axios from "axios";
import { AuthActionTypes, LoadingActionTypes } from "../actionTypes";
import { ModalState } from "../../../types/Modal";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../rootReducer";

export const loginUser = (user: any):ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
      try {
        // dispatch({type: LoadingActionTypes.LOADING})
        const responce = await axios.post('http://localhost:5000/auth/login', user)
        dispatch(login(responce.data))
        // dispatch({type: LoadingActionTypes.LOADING})
    } catch (error) {
      console.log("error", error);
    }
  };
};

export function login(user: ModalState) {
    return {
        type: AuthActionTypes.LOGIN,
        payload: user
    }
}

export function loading() {
    return {
        type: LoadingActionTypes.LOADING,
    }
}

export const logOut = () => {
    return {
        type: AuthActionTypes.LOGOUT
    }
}