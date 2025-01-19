"use client";
// import { connectToMongo } from '../../../server/DL/connectToMongo'
import { useState } from 'react';

export default function CreateTasks() {
    // connectToMongo()
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const taskData = { title, description };

        try {
            const response = await fetch('/api/tasks/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(taskData),
            });

            if (!response.ok) throw new Error('Failed to create task');

            const newTask = await response.json();
            console.log('Task created:', newTask);

            setTitle('');
            setDescription('');
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div>
            <h1>Create a Task</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Title:</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Description:</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    ></textarea>
                </div>
                <button type="submit">Create Task</button>
            </form>
        </div>
    );
}
