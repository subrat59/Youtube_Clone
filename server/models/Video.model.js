import mongoose from "mongoose"
const VideoSchema=new mongoose.Schema({
    videoURL:{
        type:String,
        required:true,
        unique:true
    },
    owner:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true,
    },
    desc:{
        type:String,
        required:true,
    },
    views:{
        type:Number,
        default:0,
        required:true,
    },
    likes:{
        type:Number,
        default:0,
        required:true,
    },
    dislikes:{
        type:Number,
        default:0,
        required:true,
    },
    tag:{
        type:[String],
        type:[],
        required:true,
        default:null
    },
    img:{
        type:String,
        required:true
    }
},{timestamps:true});

export default mongoose.model("Video",VideoSchema)