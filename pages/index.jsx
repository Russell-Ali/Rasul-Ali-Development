import Head from "next/head";
import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Typing from "react-typing-animation";
export default function Home() {
  const [loadState, setLoadState] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setLoadState(true);
    });
  });
  return (
    <dev className={styles.mainWrapper}>
      <div
        className={`${styles.textBox_1} ${
          loadState ? styles.textBox_1_anim : null
        }`}
      >
        <Typing
          className={styles.text_1_1}
          speed={150}
          startDelay={200}
          cursor={<div className={styles.cursorVisual}></div>}
        >
          <span>hi,</span>
          <Typing.Delay ms={300} />
          Welcome to my wbpa
          <Typing.Speed ms={100} />
          <Typing.Backspace count={3} />
          ebpage
          <Typing.Reset count={26} delay={1500} />
          <Typing.Delay ms={2000} />
          <Typing.Speed ms={150} />
          my name is R
          <Typing.Speed ms={100} />
          asul btw
        </Typing>
      </div>
      <div
        className={`${styles.mainContent} ${
          loadState ? styles.mainContent_anim : null
        }`}
      >
        <p className={styles.content_1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          officiis blanditiis odio deleniti hic delectus quae illum est eius aut
          sapiente obcaecati repellendus modi magnam, optio eos nisi debitis
          velit. Eius possimus quis fugit, at perferendis quia temporibus
          voluptatum iure, reiciendis ducimus voluptas sapiente maxime itaque
          nam non veniam debitis.
        </p>
      </div>
    </dev>
  );
}
