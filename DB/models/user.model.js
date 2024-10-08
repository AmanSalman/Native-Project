import {Schema, model } from "mongoose";



const userSchema = new Schema({
  username:{
    type:String,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  role:{
    type:String,
    required:true,
    enum:['admin','user'],
    default:'user'
  }
}, {
  timestamps: true,
})



export const UserModel = model('User',userSchema);