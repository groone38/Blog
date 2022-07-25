import React from "react";
import { useAppSelector } from "../../../hook";
import { Loader } from "./../../UI/loader/Loader";

export const Home = () => {
  const loading = useAppSelector((state) => state.auth.loading);
  console.log(loading)
  return (
    <>
      {loading && <Loader />}
      <div>Home</div>
    </>
  );
};
