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
      duration: "1",
      delay: "1",
      top: "-=17em",
      ease: "Power2.in",
      onComplete: completeHelper,
    });
  };
  return (
    <div
      ref={textBox}
      className={styles.textBox_1}
    >
      <p id={styles.prompt} className={styles.text_1_1}>
        $ echo
      </p>
      <Typing
        className={styles.text_1_1}
        speed={100}
        startDelay={100}
        cursor={<div className={styles.cursorVisual}></div>}
        onFinishedTyping={() => {
          greeterAnimation();
        }}
      >
        "Hi, welcome to my wbpa
        <Typing.Speed ms={80} />
        <Typing.Backspace count={3} />
        ebpage.
        <Typing.Delay ms={200} />
        <span> My name is Rasul"</span>
      </Typing>
    </div>
  );
};
export default Greeter;
