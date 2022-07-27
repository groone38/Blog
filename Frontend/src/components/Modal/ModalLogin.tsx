import {
  Button,
  Card,
  CardActions,
  CardContent,
  InputLabel,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import classes from "./ModalLogin.module.scss";
import { loginUser } from "../../redux/store/action/auth/authAction";
import { useAppDispatch, useAppSelector } from "../../hook";
import { Link, useNavigate } from "react-router-dom";

export const ModalLogin = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate()
  const dispatch = useAppDispatch();
  const auth = useAppSelector((state) => state.auth);
  const onSubmitHandler = () => {
    dispatch(loginUser(user));
  };
  useEffect(() => {
    if(auth.token) {
      navigate('/home')
    }
  }, [auth.token])

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
        <TextField
          error={!!auth.error}
          id="outlined-basic"
          label="Введите свое имя"
          helperText={`${auth.error}`}
          variant="outlined"
          name="username"
          onChange={valueHandler}
          style={{width: '100%', marginBottom: '10px'}}
        />
        <TextField
        error={!!auth.error}
          id="outlined-basic"
          label="Введите свой пароль"
          helperText={`${auth.error}`}
          variant="outlined"
          type="password"
          name="password"
          onChange={valueHandler}
          style={{width: '100%', marginBottom: '10px'}}
        />
      </CardContent>
      <div className={classes.btn__container}>
        <CardActions>
          <Button
            size="small"
            onClick={onSubmitHandler}
            variant="contained"
          >
            Login
          </Button>
        </CardActions>
        <CardActions>
          <Button
            size="small"
            variant="contained"
          >
            <Link to="/registr">Sing Up</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
