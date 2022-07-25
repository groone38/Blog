import {
    Button,
    CardActions,
    CardContent,
    InputLabel,
    Typography,
  } from "@mui/material";
  import React from "react";
  import classes from "./ModalLogin.module.scss";
  import Input from "@mui/material/Input";
import { Link } from 'react-router-dom';

  export const ModalRegistr = () => {
    return (
      <div className={classes.wrapper}>
        <div className={classes.block}>
          <CardContent>
            <Typography sx={{ fontSize: 20 }} color="text.secondary" gutterBottom>
              Registration
            </Typography>
            <InputLabel htmlFor="email">Введите свою почту</InputLabel>
            <Input id="email" name="email" color="primary" />
            <InputLabel htmlFor="name">Введите свое имя</InputLabel>
            <Input id="name" name="name" color="primary" />
            <InputLabel htmlFor="password">Введите свой пароль</InputLabel>
            <Input id="password" name="password" type="password" color="primary" />
            <InputLabel htmlFor="tel">Введите свой номер телефона</InputLabel>
            <Input id="tel" name="tel" color="primary" />
          </CardContent>
          <CardActions>
            <Button size="small" className={classes.block__btn} variant="contained">Sing Up</Button>
          </CardActions>
          <CardActions>
            <Button size="small" className={classes.block__btn} variant="contained"><Link to='/'>Login</Link></Button>
          </CardActions>
        </div>
      </div>
    );
  };
  