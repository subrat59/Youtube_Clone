import express from "express";
import { addComment, viewComments } from "../controllers/comments.js";
import { verifyToken } from "../Utils/verifyToken.js";

const router=express.Router()
router.get("/view/:id",verifyToken,viewComments)
router.post("/add/:id",verifyToken,addComment)
export default router;