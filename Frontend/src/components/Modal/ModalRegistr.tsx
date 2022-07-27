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
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./../../hook";
import { registrUser } from "../../redux/store/action/auth/authAction";
import { Loader } from "../UI/loader/Loader";

export const ModalRegistr = () => {
  const [value, setValue] = useState({
    username: "",
    password: "",
    number: "",
    city: "",
    company: "",
  });
  const dispatch = useAppDispatch();
  const state = useAppSelector((state) => state.registr);
  useEffect(() => {
    if (state.success.length > 0) {
      console.log("work");
      setValue({
        username: "",
        password: "",
        number: "",
        city: "",
        company: "",
      });
    }
  }, [state.success]);

  const onSubmitHandler = () => {
    dispatch(registrUser(value));
  };

  const valueHandler: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue({
      ...value,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  return (
    <Card sx={{ minWidth: 275 }} className={classes.wrapper}>
      {state.loading ? (
        <Loader />
      ) : (
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
            Registration
          </Typography>
          {!!state.success && (
            <Typography
              sx={{ fontSize: 20 }}
              color="text.secondary"
              gutterBottom
              style={{ textAlign: "center", color: "green" }}
            >
              {state.success}
            </Typography>
          )}
          <TextField
            error={!!state.error}
            id="outlined-basic"
            label="Введите свое имя"
            helperText={`${state.error}`}
            variant="outlined"
            name="username"
            onChange={valueHandler}
            style={{ width: "100%", marginBottom: "10px" }}
            value={value.username}
          />
          <TextField
            error={!!state.error}
            id="outlined-basic"
            label="Введите свой пароль"
            helperText={`${state.error}`}
            variant="outlined"
            type="password"
            name="password"
            onChange={valueHandler}
            style={{ width: "100%", marginBottom: "10px" }}
            value={value.password}
          />
          <TextField
            error={!!state.error}
            id="outlined-basic"
            label="Введите свой номер телефона"
            helperText={`${state.error}`}
            variant="outlined"
            name="number"
            onChange={valueHandler}
            style={{ width: "100%", marginBottom: "10px" }}
            value={value.number}
          />
          <TextField
            error={!!state.error}
            id="outlined-basic"
            label="Введите свой город"
            helperText={`${state.error}`}
            variant="outlined"
            name="city"
            onChange={valueHandler}
            style={{ width: "100%", marginBottom: "10px" }}
            value={value.city}
          />
          <TextField
            error={!!state.error}
            id="outlined-basic"
            label="Введите компанию в которой работаете"
            helperText={`${state.error}`}
            variant="outlined"
            name="company"
            onChange={valueHandler}
            style={{ width: "100%", marginBottom: "10px" }}
            value={value.company}
          />
        </CardContent>
      )}

      <div className={classes.btn__container}>
        <CardActions>
          <Button size="small" onClick={onSubmitHandler} variant="contained">
            Registration
          </Button>
        </CardActions>
        <CardActions>
          <Button size="small" variant="contained">
            <Link to="/">Login</Link>
          </Button>
        </CardActions>
      </div>
    </Card>
  );
};
