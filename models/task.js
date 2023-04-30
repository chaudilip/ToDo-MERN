import mongoose from "mongoose";

const schema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        required:true,
        type:String,
    },
    isCompleted:{
        type:Boolean,
        default:false,
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    createdAt:{
        type:String,
        default:Date.now,
    }
});

export const Task = mongoose.model("Task",schema);