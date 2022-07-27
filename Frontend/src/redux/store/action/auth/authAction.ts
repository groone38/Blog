import axios from "axios";
import { AuthActionTypes, LoadingActionTypes } from "../actionTypes";
import { ModalState } from "../../../types/Modal";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { AnyAction } from "redux";
import { RootState } from "../../rootReducer";
import { User } from "./../../../types/users";

export const loginUser = (
  user: any
): ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
      // dispatch({type: LoadingActionTypes.LOADING})
      const response = await axios.post(
        "http://localhost:5000/auth/login",
        user
      );
      dispatch(login(response.data));
      // dispatch({type: LoadingActionTypes.LOADING})
    } catch (error) {
      dispatch(errorLogin(error.response.data.message));
    }
  };
};

export const registrUser = (
  user: any
): ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    dispatch({type: LoadingActionTypes.LOADING})
    try {
      const response = await axios.post("http://localhost:5000/auth/registration", user);
      dispatch({type: AuthActionTypes.REGISTRATION, payload: response.data.message});
    } catch (error) {
      dispatch({type: AuthActionTypes.ERROR, payload: error.response.data.message});
    }
    dispatch({type: LoadingActionTypes.LOADING})
  };
};

export function login(user: ModalState) {
  return {
    type: AuthActionTypes.LOGIN,
    payload: user,
  };
}

export function errorLogin(error: string) {
  return {
    type: AuthActionTypes.ERROR,
    payload: error,
  };
}

export function loading() {
  return {
    type: LoadingActionTypes.LOADING,
  };
}

export const logOut = () => {
  return {
    type: AuthActionTypes.LOGOUT,
  };
};
