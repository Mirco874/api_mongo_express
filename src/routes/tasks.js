import { Router } from "express";
import * as tasksController from '../controllers/tasksController';
const router=Router();

router.get('/done',tasksController.getAllDoneTasks)
    
router.get('/uncompleted',tasksController.getAllUncompletedTasks)

router.get('/',tasksController.getAllTasks)

router.get('/:id',tasksController.getTask)

router.put('/:id',tasksController.updateTask)

router.post('/',tasksController.createTask)

router.delete('/:id',tasksController.deleteTaskById)

router.delete('/',tasksController.deletedTask)


export default router;