"use client"
import { MdAdd } from "react-icons/md";
import { useState } from "react"
import styles from './style.module.scss'

export default function AddATask({ getAllTasks }) {
    const [newTask, setNewTask] = useState('');

    const assANewTask = async () => {
        if (newTask === '') return
        const title = newTask;

        try {
            const response = await fetch('/api/tasks/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ title }),
            });

            if (!response.ok) throw new Error('Failed to create task');
            getAllTasks()

            const newTask = await response.json();
            console.log('Task created:', newTask);
            setNewTask("");
        } catch (error) {
            console.error('Error:', error);
        }
    }
    return (
        <div className={styles.buttonAdd}>
            <MdAdd onClick={assANewTask} className={styles.addIcon} />
            <input
                value={newTask}
                type="text"
                placeholder="...הוסף כאן משימה"
                onChange={(e) => setNewTask(e.target.value)}
            />
        </div>

    )
}
