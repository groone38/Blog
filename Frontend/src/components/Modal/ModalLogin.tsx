import {
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import classes from "./ModalLogin.module.scss";
import Input from "@mui/material/Input";
import { loginUser } from "../../redux/store/action/auth/authAction";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Link } from "react-router-dom";

export const ModalLogin = () => {
  const [user, setUser] = useState({});
  const dispatch = useAppDispatch();
  const auth = useAppSelector(state => state.auth)
  const onSubmitHandler = () => {
    dispatch(loginUser(user));
  };
  console.log(auth);
  const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({
      ...user,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };
  return (
    <Card sx={{ minWidth: 275 }} className={classes.wrapper}>
      <CardContent>
        <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
          Login
        </Typography>
        {/* <InputLabel htmlFor="username">Введите свое имя</InputLabel>
        <Input
          id="username"
          name="username"
          color="primary"
          className={classes.input}
          onChange={valueHandler}
        /> */}
        <TextField id="outlined-basic" label="Введите свое имя" variant="outlined" name='username' onChange={valueHandler}/>
        <TextField id="outlined-basic" label="Введите свой пароль" variant="outlined" name='password' onChange={valueHandler}/>
        {/* <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
        <Input
          id="password"
          name="password"
          type="password"
          color="primary"
          onChange={valueHandler}
        /> */}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          className={classes.block__btn}
          onClick={onSubmitHandler}
          variant="contained"
        >
          Login
        </Button>
      </CardActions>
      <CardActions>
        <Button size="small"  variant="contained" className={classes.block__btn}>
          <Link to="/registr">Sing Up</Link>
        </Button>
      </CardActions>
    </Card>
  );
};
