import { createError } from "../Utils/error.js"
import Video from "../models/Video.model.js"


export const addvideo=async (req,res,next)=>{
     console.log(req.user.id)
     try {
          const newvideo= new Video({
               owner:req.user.id,
               ...req.body
          })
          await newvideo.save()
          res.status(203).send("Video Added Successfully.")
     } catch (error) {
          console.log(error)
     }
}

export const viewvideo=async (req,res,next)=>{
     
     try {
          const video=await Video.findOne({_id:req.params.id})
          res.status(200).json(video)
          console.log(video)
     } catch (error) {
          console.log(error)
     }
}

export const updatevideo=async (req,res,next)=>{
     console.log(req.user.id)
     try {
          const updatevideo=await Video.findOne({_id:req.params.id})
          if(updatevideo.owner===req.user.id){
          const updatedvideo=await Video.findByIdAndUpdate(updatevideo._id,{
               $set: req.body
     },{new: true})
     console.log(updatedvideo)
}
else{
     next(createError(404,"You have no access to update the video."))
}
     } catch (error) {
          next(createError(404,"Can't Update video."))
     }
}

export const likevideo=async (req,res,next)=>{
     try{
          const likevideo=await Video.findByIdAndUpdate(req.params.id,{
               $inc: {likes: 1}
          })
          res.status(200).send("Liked")
     } catch (error) {
          next(createError(404,error))
     }
}

export const dislikevideo=async (req,res,next)=>{
     try{
          const dislikevideo=await Video.findByIdAndUpdate(req.params.id,{
               $inc: {dislikes: 1}
          })
          res.status(200).send("Disliked")
     } catch (error) {
          next(createError(404,error))
     }
}

export const random=async(req,res,next)=>{
     console.log("Random")
     try {
       const videos=await Video.aggregate([{$sample: { size: 10 }}])
       res.status(200).json(videos)

     } catch (error) {
          next(createError(404,"Can't get random videos."))
     }
}
