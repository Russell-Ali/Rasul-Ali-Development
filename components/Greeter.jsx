import styles from "../styles/Greeter.module.css";
import gsap from "gsap";
import { useRef } from "react";
import Typing from "react-typing-animation";
const Greeter = ({ completeHandler }) => {
  const textBox = useRef();
  const greeterAnimation = () => {
    const completeHelper = () => {
      completeHandler();
    };
    gsap.to(textBox.current, {
      duration: "2",
      delay: "1.5",
      top: "-=17em",
      ease: "Power4.in",
      onComplete: completeHelper,
    });
  };
  return (
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
          greeterAnimation();
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
  );
};
export default Greeter;
