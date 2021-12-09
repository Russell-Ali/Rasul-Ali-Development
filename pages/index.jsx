import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <dev className={styles.mainWrapper}>
      <div className={styles.textBox_1}>
        <div className={styles.line_1_1}>
          <h1 className={styles.text_1_1}>hi,</h1>
        </div>
        <div className={styles.line_1_2}>
          <h1 className={styles.text_1_2}>welcome to my webpage</h1>
          <dev className={styles.cursorVisual}></dev>
        </div>
      </div>
    </dev>
  );
}
