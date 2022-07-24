import Router from "express";
import authControllers from "../Controllers/authControllers.js";
import { check } from 'express-validator';

const routerAuth = new Router()

routerAuth.post('/registration', [
    check('username', "Имя пользователя не может быть пустым").notEmpty(),
    check('password', "Пароль не может быть меньше 10 символов").isLength({min: 2, max: 10})
], authControllers.registration)
routerAuth.post('/login', authControllers.login)
routerAuth.get('/user', authControllers.getUsers)

export default routerAuth