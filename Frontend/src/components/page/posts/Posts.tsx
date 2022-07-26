import React from "react";
import { useAppSelector } from "../../../hook";
import { Loader } from "../../UI/loader/Loader";
import CardItem from '../../UI/card/Card';

const Posts = () => {
    const loading = useAppSelector((state) => state.auth.loading);
    console.log(loading)
    return (
      <>
        {loading && <Loader />}
        <div>Home</div>
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
        <CardItem />
      </>
    );
}

export default Posts