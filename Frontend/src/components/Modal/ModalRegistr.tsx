import {
    Button,
    Card,
    CardActions,
    CardContent,
    InputLabel,
    Typography,
  } from "@mui/material";
  import React, { useState } from "react";
  import classes from "./ModalLogin.module.scss";
  import Input from "@mui/material/Input";
import { Link } from 'react-router-dom';
import { useAppDispatch } from './../../hook';
import { registrUser } from "../../redux/store/action/auth/authAction";

  export const ModalRegistr = () => {
    const [value, setValue] = useState({})
    const dispatch = useAppDispatch()
    const onSubmitHandler = () => {
        dispatch(registrUser(value))
    }

    const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setValue({
            ...value,
            [e.currentTarget.name]: e.currentTarget.value
        })
    }

    return (
        <Card sx={{ minWidth: 275 }} className={classes.wrapper}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Registration
            </Typography>
            <InputLabel htmlFor="email">Введите свою почту</InputLabel>
            <Input id="email" name="email" color="primary" />
            <InputLabel htmlFor="username">Введите свое имя</InputLabel>
            <Input id="username" name="username" color="primary" onChange={valueHandler}/>
            <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
            <Input id="password" name="password" type="password" color="primary" onChange={valueHandler}/>
            <InputLabel htmlFor="tel">Введите свой номер телефона</InputLabel>
            <Input id="tel" name="tel" color="primary" />
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.block__btn} variant="contained" onClick={onSubmitHandler}>Sing Up</Button>
          </CardActions>
          <CardActions>
            <Button size="small" className={classes.block__btn} variant="contained"><Link to='/login'>Login</Link></Button>
          </CardActions>
        </Card>
    );
  };
  