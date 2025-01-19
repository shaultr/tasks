import styles from './style.module.scss'
import { useState } from 'react';
export default function Todo({ task }) {
    const [completed, setCompleted] = useState(false);
    // const [completed, setCompleted] = useState(task.completed);

    const handleCheckboxChange = () => {
        setCompleted(!completed);
    };

    return (
        <div>

            <input
                type="checkbox"
                // checked={completed}
                onChange={handleCheckboxChange}
            />
            <span>{task.title}</span>
        </div>
    )
}
