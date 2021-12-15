import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import Typing from "react-typing-animation";
export default function Home() {
  const textBox = useRef();
  const prompt = useRef();
  const [greeterState, setGreeterState] = useState(true);
  const mainContent = useRef();
  const greeterFirst = () => {
    gsap.to(textBox.current, {
      duration: "2",
      delay: "1.5",
      boxShadow:
        "0px 8px 17px 2px rgba(0, 0, 0, 0), 0px 3px 14px 2px rgba(0, 0, 0, 0), 0px 5px 5px -3px rgba(0, 0, 0, 0)",
      ease: "sine.out",
    });
    gsap.to(prompt.current, {
      duration: "2",
      delay: "1.5",
      opacity: "0",
      ease: "sine.out",
    });

    gsap.to(mainContent.current, {
      duration: "2",
      delay: "3.6",
      top: "0",
      ease: "sine.out",
    });

    setTimeout(() => setGreeterState(false), 3600);
  };

  return (
    <dev className={styles.mainWrapper}>
      {greeterState ? (
        <div
          ref={textBox}
          className={`${styles.textBox_1} ${0 ? styles.textBox_1_anim : null}`}
        >
          <p id={styles.prompt} ref={prompt} className={styles.text_1_1}>
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
            <Typing.Backspace delay={1000} count={20} speed={20} />
          </Typing>
        </div>
      ) : null}

      <div className={styles.mainContent} ref={mainContent}></div>
    </dev>
  );
}
