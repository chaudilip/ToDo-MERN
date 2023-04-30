import mongoose from "mongoose";

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        required:true,
        type:String,
        unique:true,
    },
    password:{
        required:true,
        type:String,
        select:false
    },
    createdAt:{
        type:String,
        default:Date.now,
    }
});

export const User = mongoose.model("User",schema);