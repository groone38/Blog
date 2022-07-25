import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ModalLogin } from "./components/Modal/ModalLogin";
import { ModalRegistr } from "./components/Modal/ModalRegistr";
import { Header } from "./components/UI/Header";
import classes from "./App.module.scss";
import { fetchUsers } from "./redux/store/action/usersAction";
import { useAppDispatch, useAppSelector } from "./hook";
import { Home } from "./components/page/home/Home";

export const App = () => {
  const dispatch = useAppDispatch();
  const sing = useAppSelector((state) => state.auth);
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <div className={classes.wrapper}>
        <Routes>
          {!sing.token ? (
            <>
              <Route path="/" element={<ModalLogin />} />
              <Route path="/registr" element={<ModalRegistr />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
            </>
          )}
        </Routes>
      </div>
    </BrowserRouter>
  );
};
