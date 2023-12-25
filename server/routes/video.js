import { verifyToken } from "../Utils/verifyToken.js";
import {addvideo, dislikevideo, likevideo, random, updatevideo, viewvideo} from "../controllers/videos.js"
import express from "express"

const router=express.Router()
router.post("/",verifyToken,addvideo)
router.put("/update/:id",verifyToken,updatevideo)
router.get("/view/:id",verifyToken,viewvideo)
router.put("/like/:id",verifyToken,likevideo)
router.put("/dislike/:id",verifyToken,dislikevideo)
router.get("/random",verifyToken,random)


export default router;