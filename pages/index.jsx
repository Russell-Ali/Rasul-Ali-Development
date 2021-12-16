import { useState } from "react";
import styles from "../styles/Home.module.css";
import Greeter from "../components/Greeter";

export default function Home() {
  const [greeterState, setGreeterState] = useState(true);
  const completeHandler = () => {
    setGreeterState(false);
  };
  return (
    <dev className={styles.mainWrapper}>
      {greeterState ? <Greeter completeHandler={completeHandler} /> : null}
      <div className={styles.mainContent}>
        <p className={styles.text_1_1}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod tenetur
          voluptate temporibus iste hic quas harum, esse nihil, ex dolores
          veniam reprehenderit nostrum neque repellat?
        </p>
      </div>
    </dev>
  );
}
