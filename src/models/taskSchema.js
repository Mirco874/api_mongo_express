import { Schema, model } from "mongoose";
import mongoosePaginate from "mongoose-paginate-v2";

const taskSchema=new Schema (
{
title:
    {type:String , required:false},
description:
    {type:String , required:false},
completed:
    {type:Boolean , default:false, required:false},

},
{
versionKey:false,
timestamps:true
})

taskSchema.plugin(mongoosePaginate);
const tasksModel=new model("tasks",taskSchema);
export default tasksModel;
