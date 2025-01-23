"use client";
import Todo from '@/components/Todo';
import styles from './style.module.scss';
import { useEffect, useState } from "react";
import AddATask from '@/components/AddATask';
import Loading from '@/components/Loading';

export default function TodoList() {
    const [isLock, setIsLock] = useState(true);
    const [list, setList] = useState(null);
    const [loading, setLoading] = useState(true);

    const getAllTasks = async () => {
        try {
            setLoading(true);
            const response = await fetch('/api/tasks/readAll', { method: 'GET' });
            if (!response.ok) throw new Error('Failed to fetch tasks');
            const allTasks = await response.json();
            setList(allTasks);
        } catch (error) {
            console.error('Error fetching tasks:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getAllTasks();
    }, []);

    return (
        <div className={styles.container}>
            <AddATask getAllTasks={getAllTasks} />
            {loading && <Loading />}
            <div className={styles.list}>
                {list &&
                    list.map((t) => (
                        <Todo
                            key={t._id}
                            task={t}
                            isLock={isLock}
                            setIsLock={setIsLock}
                        />
                    ))
                }
            </div>
            {!loading && list && list.length === 0 && <p>No tasks found</p>}
            {isLock && (
                <div className={styles.lock} onClick={() => setIsLock(!isLock)}>
                    שחרר נעילה
                </div>
            )}
        </div>
    );
}
