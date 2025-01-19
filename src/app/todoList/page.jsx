"use client"
import Todo from '@/components/Todo'
import styles from './style.module.scss'
import { useState } from "react"
export default function ToList() {
    const [list, setList] = useState([{title: "שעון שבת", completed:false},{title: "פלטה חשמלית",completed:true}])
    
    return (
        <div className={styles.container}>
            List
            {list.map((t, index) => <Todo key={index} task={t}/>)}
        </div>
    )
}
