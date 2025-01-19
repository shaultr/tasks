const mongoose = require('mongoose');


const Task = mongoose.model('Task', new mongoose.Schema({
    name: String,
    completed: Boolean,
}));

const createTask = async () => {
    const task = new Task({
        name: 'First Task',
        completed: false,
    });
    await task.save();
    console.log('Task saved');
};

createTask();
