import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";
import gsap from "gsap";
import Typing from "react-typing-animation";
export default function Home() {
  const textBox = useRef();
  const mainContent = useRef();
  const greeterFirst = () => {
    console.log("greeter first");
    gsap.to(textBox.current, {
      duration: "1",
      delay: "1.5",
      y: "-=150px",
      ease: "sine.out",
    });
    gsap.to(mainContent.current, {
      duration: "1",
      delay: "1.5",
      y: "-=150px",
      ease: "sine.out",
    });
  };

  return (
    <dev className={styles.mainWrapper}>
      <div
        ref={textBox}
        className={`${styles.textBox_1} ${0 ? styles.textBox_1_anim : null}`}
      >
        <Typing
          className={styles.text_1_1}
          speed={150}
          startDelay={200}
          cursor={<div className={styles.cursorVisual}></div>}
          onFinishedTyping={() => {
            console.log("just finished");
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
      <div
        className={`${styles.mainContent} ${
          0 ? styles.mainContent_anim : null
        }`}
      >
        <p ref={mainContent} className={styles.content_1}>
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
