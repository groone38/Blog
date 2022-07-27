import React from "react";
import { useAppSelector } from "../../../hook";
import { Loader } from "./../../UI/loader/Loader";
import CardItem from './../../UI/card/Card';
import classes from './Home.module.scss'

export const Home = () => {
  
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.container__avatar}>

        </div>
        <div className={classes.container__info}>

        </div>
      </div>
    </div>
  );
};
