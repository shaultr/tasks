import { createTask } from "../DL/controllers/task.controller";

export const createTaskService = async (task) => {
    console.log(task);
    
    const taskSchema = {
        title: task.title,
        description: task.description,
    }
    const result = await createTask(taskSchema);
    console.log('🎃🎊🎊\n',result)
    return result;
};
