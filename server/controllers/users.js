import { createError } from "../Utils/error.js"
import User from "../models/User.model.js"


export const update=async (req,res,next)=>{
     try {
          if(req.params.id===req.user.id){
               const { password, ...others } = req.body;
               const updatedUser=await User.findByIdAndUpdate(req.params.id,{
                    $set:others
               },{new:true})
               console.log(updatedUser)
          }
          else{
               console.log("Bhaak Madarchod")
          }
     } catch (error) {
          next(createError(404,"Invalid Request"))
     }
}

export const subcribe=async (req,res,next)=>{
     try {
          const user=await User.findByIdAndUpdate(req.params.id,{
               $inc: {subscribers: 1},
               $push: {subscribedUsers:req.user.id}
          })
          console.log(user)
     } catch (error) {
          next(createError(404,"Something went Wrong"))          
     }
}

export const unsubcribe=async (req,res,next)=>{
     try {
          const user=await User.findByIdAndUpdate(req.params.id,{
               $inc: {subscribers:-1},
               $pull: {subscribedUsers:req.user.id}
          })
          console.log(user)
     } catch (error) {
          next(createError(404,"Something went Wrong"))          
     }
}