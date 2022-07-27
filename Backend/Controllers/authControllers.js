import User from "../models/User.js";
import Role from "../models/Role.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { validationResult } from "express-validator";
import secret from "../config.js";

const generateAccessToken = (id, roles) => {
  const payload = {
    id,
    roles,
  };
  return jwt.sign(payload, secret, { expiresIn: "24h" });
};

class AuthController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          message: "Ошибка при регистрации",
          errors,
        });
      }
      const { username, password, number, city, company } = req.body;
      const candidate = await User.findOne({ username });
      if (candidate) {
        return res.status(400).json({
          message: "User with the same name already exists",
        });
      }
      const hashPassword = bcrypt.hashSync(password, 7);
      const userRole = await Role.findOne({ value: "USER" });
      const user = new User({
        username,
        password: hashPassword,
        roles: [userRole.value],
        number,
        city,
        company
      });
      await user.save();
      return res.json({
        message: "Пользователь был зарегестрирован",
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Registration error",
      });
    }
  }

  async login(req, res) {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      if (!user) {
        return res.status(400).json({
          message: "Пользователь с таким именем не найден",
        });
      }
      const validationPassword = bcrypt.compareSync(password, user.password);
      if (!validationPassword) {
        return res.status(400).json({
          message: "Пароль не верный",
        });
      }
      const token = generateAccessToken(user._id, user.roles);
      return res.json({
        token: token,
        user: user,
      });
    } catch (error) {
      console.log(error);
      res.status(400).json({
        message: "Login error",
      });
    }
  }

  async getUsers(req, res) {
    try {
      // const userRole = new Role()
      // const adminRole = new Role({value: "ADMIN"})

      // await userRole.save()
      // await adminRole.save()
      const users = await User.find();
      res.json(users);
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(req, res) {
    try {
      
    } catch (error) {
      
    }
  }
}

export default new AuthController();
