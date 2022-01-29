import { FC } from "react";
import styles from "./Title.module.scss";

type TitleObj = {
  index: string;
  title: string;
};

const Title: FC<TitleObj> = (props) => {
  return (
    <section className={styles.title}>
      <span>{props.index}</span>
      <h2>{props.title}</h2>
    </section>
  );
};

export default Title;
