import mongoose from "mongoose"


const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        default:null,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        default:null,
    },
    subscribers:{
        type:Number,
        default:0
    },
    subscribedUsers:{
        type:[String],
        default:[],
    }
},{timestamps:true});

 const User= mongoose.model("User",UserSchema)
 export default User