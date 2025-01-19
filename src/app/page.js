import styles from "./style.module.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.page}>
            <Link href="/tasks">Create a New Task</Link>
            <Link href="/todoList">todoList </Link>
            </div>
  );
}
