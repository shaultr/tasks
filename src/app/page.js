import styles from "./style.module.scss";
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
            <Link href="/tasks">הוסף משימות</Link>
            <Link href="/todoList">נהל משימות </Link>
            </div>
  );
}
