import { createError } from "../Utils/error.js"
import Comment from "../models/Comment.model.js"

export const viewComments=async(req,res,next)=>{
    try {
        const comments=await Comment.find({videoId:req.params.id})
        res.status(200).json(comments)
    } catch (error) {
        createError(404,"Can't show comments.")
    }
}

export const addComment=async (req,res,next)=>{
    console.log(req.params.id)
    try {
        const newComment=new Comment({
            userId:req.user.id,
            videoId:req.params.id,
            desc:req.body.desc
        })
        await newComment.save()
        res.status(200).send("Comment Added Successfully.")
    } catch (error) {
        next(createError(404,error))
    }
}