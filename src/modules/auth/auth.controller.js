import { UserModel } from "../../../DB/models/user.model.js"
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

export const register = async(req, res) => {
  const {username,email,password} = req.body
  const hashed = await bcrypt.hash(password, parseInt(process.env.SALT))
  const user = await UserModel.findOne({
    $or:[
      {email:email},
      {username:username}
    ]
  })
  if(user){
    return res.status(400).json({
      message:"User already exists"
    })
  }
  const newUser = await UserModel.create({
    username:username,
    email:email,
    password:hashed
  })
  return res.status(200).json({
    message:"success", 
  })
}


export const login = async (req, res) =>{
  const {email,password} = req.body
  const user = await UserModel.findOne({email})
  if(!user){
    return res.status(400).json({
      message:"User not found"
    })
  }
  const match = await bcrypt.compare(password, user.password)
  if(!match){
    return res.status(400).json({
      message:"Invalid password"
    })
  }
  const token = jwt.sign({role:user.role}, process.env.JWT_SECRET)
  return res.json({message:'success', token:token})
}