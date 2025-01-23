"use client"
import styles from './style.module.scss'
import { useState } from 'react';
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

export default function Todo({ task, isLock, setIsLock }) {


    const [completed, setCompleted] = useState(false);

    const handleCheckboxChange = () => {
        if (!isLock)
            setCompleted(!completed);
        else if (!completed) {
            setCompleted(true);
        }
        setIsLock(true);
    };



    return (
        <div className={styles.container}>
            <div className={styles.update}>
            <MdDelete />
            <CiEdit />
            </div>
            <span className={completed ? styles.completed : styles.noCompleted}>
                {task.title}
            </span>

            <input
                type="checkbox"
                checked={completed}
                onChange={handleCheckboxChange}
            />
        </div>
    )
}
