import { createTask, readAllTasks } from "../DL/controllers/task.controller";

export const createTaskService = async (task) => {
    console.log(task);
    
    const taskSchema = {
        title: task.title,
        description: task.description,
    }
    const result = await createTask(taskSchema);
    return result;
};

export const readAllTasksService = async () => {
  
    const result = await readAllTasks();
    return result;
};
