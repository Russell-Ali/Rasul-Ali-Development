import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import Typing from "react-typing-animation";
export default function Home() {
  const textBox = useRef();
  const mainContent = useRef();
  const card_1 = useRef();
  const greeterFirst = () => {
    console.log("greeter first");
    gsap.to(textBox.current, {
      duration: "1",
      delay: "1.5",
      y: "-=8em",
      ease: "sine.out",
    });
    gsap.to(mainContent.current, {
      duration: "1",
      delay: "1.5",
      y: "-=8em",
      ease: "sine.out",
      height: "+=8em",
    });
  };

  const cardFlip = () => {
    console.log("Flipped");
  };

  return (
    <dev className={styles.mainWrapper}>
      <div
        ref={textBox}
        className={`${styles.textBox_1} ${0 ? styles.textBox_1_anim : null}`}
      >
        <p id={styles.prompt} className={styles.text_1_1}>
          $ echo
        </p>
        <Typing
          className={styles.text_1_1}
          speed={150}
          startDelay={200}
          cursor={<div className={styles.cursorVisual}></div>}
          onFinishedTyping={() => {
            greeterFirst();
          }}
        >
          Hi, welcome to my wbpa
          <Typing.Speed ms={100} />
          <Typing.Backspace count={3} />
          ebpage
          <Typing.Backspace count={40} speed={10} delay={1900} />
          <Typing.Delay ms={500} />
          <Typing.Speed ms={100} />
          <span> my name is Rasul btw</span>
        </Typing>
      </div>
      <div className={styles.mainContent} ref={mainContent}>
        <div onClick={cardFlip} ref={card_1} className={styles.card_1}>
          <p>Contact information</p>
        </div>
      </div>
    </dev>
  );
}
