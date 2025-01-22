"use client"
import Todo from '@/components/Todo'
import styles from './style.module.scss'
import { useEffect, useState } from "react"
import AddATask from '@/components/AddATask'

export default function ToList() {
    const [isLock, setIsLock] = useState(true)

    const [list, setList] = useState([])

    const getAllTasks = async () => {
        try {
            const response = await fetch('/api/tasks/readAll', {
                method: 'GET'
            });

            if (!response.ok) throw new Error('Failed to fetch tasks');

            const allTasks = await response.json();
            console.log('🎑 Tasks:', allTasks);
            setList(allTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        }
    };
    useEffect(() => {
        getAllTasks()
      }, []);
      
      return (
        <div className={styles.container}>
            <AddATask getAllTasks={getAllTasks}/>
            {list.map((t, index) =>
                <Todo
                    key={index}
                    task={t}
                    isLock={isLock}
                    setIsLock={setIsLock}
                />)}
            {isLock &&
                <div className={styles.lock} onClick={() => setIsLock(!isLock)}>
                    שחרר נעילה
                </div>}
        </div>
    )
}
