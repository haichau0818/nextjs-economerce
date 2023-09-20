import { expression } from "joi";
import mongoose from "mongoose";



const UserShema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,
});


const User= mongoose.User|| mongoose.model('User',UserShema);


export default User;