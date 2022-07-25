import { Dispatch } from "react";
import { UserAction, UserState } from "../../types/users";
import axios from "axios";
import { UserActionTypes } from "./actionTypes";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { RootState } from "../rootReducer";
import { AnyAction } from "redux";

export const fetchUsers = ():ThunkAction<void, RootState, void, AnyAction> => {
  return async (dispatch: ThunkDispatch<RootState, void, AnyAction>) => {
    try {
      const responce = await axios.get("http://localhost:5000/auth/user");
    //   dispatch({
    //     type: UserActionTypes.FETCH_USERS,
    //     payload: responce.data,
    //   });
      dispatch(fetch(responce.data))
      console.log("test", responce.data);
    } catch (error) {
      console.log("error", error);
    }
  };
};

export function fetch(users: UserState) {
  return {
    type: UserActionTypes.FETCH_USERS,
    payload: users,
  };
}
