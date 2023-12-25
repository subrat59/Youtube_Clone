import { verifyToken } from "../Utils/verifyToken.js";
import {subcribe, unsubcribe, update} from "../controllers/users.js"
import express from "express"

const router=express.Router()

//update 
router.put("/:id",verifyToken,update)
//delete
//get a user
//subscribe user
router.put("/sub/:id",verifyToken,subcribe)
//unsubscribe
router.put("/unsub/:id",verifyToken,unsubcribe)
//like a video
//dislike a video


export default router;