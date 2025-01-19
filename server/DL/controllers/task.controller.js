import { TaskModel } from "../models/task.model";

export const createTask = (data) => TaskModel.create(data)
