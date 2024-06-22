import mongoose from "mongoose";




export const conn = async (req, res) => {
  return mongoose.connect(process.env.mongo_url).then(()=>{
    console.log("DB connected")
  }).catch(err =>
    console.log(err)
  )
}