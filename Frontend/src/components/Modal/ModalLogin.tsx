import {
  Button,
  CardActions,
  CardContent,
  InputLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./ModalLogin.module.scss";
import Input from "@mui/material/Input";
import { loginUser } from "../../redux/store/action/auth/authAction";
import { useAppDispatch } from "../../hook";
import { Link } from 'react-router-dom';

export const ModalLogin = () => {
    const [user, setUser] = useState({})
    const dispatch = useAppDispatch()
    const onSubmitHandler = () => {
        dispatch(loginUser(user))
    }
    const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setUser({
            ...user,
            [e.currentTarget.name]: e.currentTarget.value,
        })
    }
  return (
    <div className={classes.wrapper}>
      <div className={classes.block}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Login
          </Typography>
          <InputLabel htmlFor="username">Введите свое имя</InputLabel>
          <Input id="username" name="username" color="primary" onChange={valueHandler}/>
          <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
          <Input id="password" name="password" type="password" color="primary" onChange={valueHandler}/>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.block__btn} onClick={onSubmitHandler} variant="contained">Login</Button>
        </CardActions>
        <CardActions>
          <Button size="small" className={classes.block__btn} variant="contained"><Link to='/registr'>Sing Up</Link></Button>
        </CardActions>
      </div>
    </div>
  );
};
