import { json } from 'express';
import taskPetition from '../models/taskSchema'
import { getPagination } from '../libs/getPagination';

export const getAllDoneTasks= async (req,res)=>{
    try {
        const tasks=await taskPetition.find({"completed":true})
        res.json(tasks);
    } catch (error) {
        res.status(500).json({"message":"something happend while we returning the tasks"})
    }
}

export const getAllUncompletedTasks=async (req,res)=>{
    try {
        const tasks= await taskPetition.find({"completed":false})
        res.json(tasks);
    } catch (error) {
        res.status(500).json({"message":"something happend while we returning the tasks"})
    }
}

export const getAllTasks=async (req,res)=>{
    try {
        const {size, page}=req.query;
        const {limit,offset}=getPagination(page, size)
        const tasks= await taskPetition.paginate({},{offset,limit})
        res.json(tasks);
        
        } catch (error) {
        res.status(500).json({"message":"something happend while we returning the tasks"})
        }
     
     }


// export const getAllTasks=async (req,res)=>{
//     try {
//         const tasksLoaded= await taskPetition.find(); 
//         res.json(tasksLoaded);
//     } catch (error) {
//         res.status(500).json({"message":"something happend while we returning the tasks"})
//     }
 
// }

export const getTask=async (req, res)=>{
    const id=req.params.id;
    try{
    const tasksLoaded=await taskPetition.findById(id);
    res.json(tasksLoaded)
    }
    catch(error){
    res.status(404).json({"message":`there is not exist a task with id: ${id}`})
    console.error(error);
    }
}

export const deleteTaskById=async (req,res)=>{
    const id=req.params.id;
    console.log(id);
    if(!id){
        res.status(400).json({"message":"there is not id"})
    }
    else{
    try{    
    const deletedTask= await taskPetition.findByIdAndDelete(id)
    res.json(deletedTask);
    }
    catch(error){
        res.status(500).json({"message": error.message || `there is not possible delete the task with id: ${id}`})
        console.error(error);
    }
    }
}

export const deletedTask=async (req,res)=>{
    const query=req.query;
    if(Object.keys(query).length === 0){   
        res.status(400).json({"message":"there is not a specific param to delete a task"})     
     }
    else{
    try {
        const deletedTask= await taskPetition.findOneAndDelete(query)
        res.json(deletedTask)
    } catch (error) {
        console.error(error);
        res.status(500).json({"message": error.message || `there is not exist a task with the property ${query}`})
    }
    }   
}

export const updateTask=async (req,res)=>{
    const id=req.params.id;
    try {
        const change=req.body;
        const updateTask=await taskPetition.findByIdAndUpdate(id,change)
        res.json(updateTask);
    } catch (error) {
        res.status(500).json({"message":error.message || "something is wrong"})
    }
}

export const createTask=async (req,res)=>{
    const {title,description}=req.body;

    if(title==undefined){
        res.status(400).send({"message":"the title is required"})
    }
    else{
    try {
        const newTask= new taskPetition({"title":title,"description":description})
        const savedTask= await newTask.save()
        res.json(savedTask) 
    } catch (error) {
        res.status(500).json({"message":"server internal error"})
    }
}
}
















