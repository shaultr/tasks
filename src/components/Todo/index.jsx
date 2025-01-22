"use client"
import styles from './style.module.scss'
import { useState } from 'react';
import { FaEllipsisVertical } from "react-icons/fa6";

export default function Todo({ task, isLock, setIsLock }) {
    const [completed, setCompleted] = useState(false);
    const [showMenu, setShowMenu] = useState(false);

    const handleCheckboxChange = () => {
        if (!isLock)
            setCompleted(!completed);
        else if (!completed) {
            setCompleted(true);
        }
        setIsLock(true);
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className={styles.container}>
            <FaEllipsisVertical className={styles.menuIcon} onClick={toggleMenu} />
            {showMenu && (
                <div className={styles.menu}>
                    <div>עדכון</div>
                    <div>מחיקה</div>
                </div>
            )}
            <span className={`${completed ? styles.completed : styles.noCompleted}`}>
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
