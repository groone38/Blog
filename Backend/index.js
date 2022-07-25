import express from "express";
import mongoose from "mongoose";
import routerAuth from "./router/authRouter.js";
import cors from 'cors'

const PORT = process.env.PORT || 5000;
const DB_URL = "mongodb+srv://groone38:123@cluster0.36qcftn.mongodb.net/mern?retryWrites=true&w=majority";

const app = express();
 
app.use(express.json());
app.use(cors())
app.use('/auth', routerAuth);

async function startServer() {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server started in PORT ${PORT}`));
  } catch (error) {
    console.log(error);
  }
}

startServer()