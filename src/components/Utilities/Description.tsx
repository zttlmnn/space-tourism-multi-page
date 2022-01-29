import { FC } from "react";
import styles from "./Description.module.scss";

type DescriptionObj = {
  text: string;
};

const Description: FC<DescriptionObj> = (props) => {
  return <p className={styles.text}>{props.text}</p>;
};

export default Description;
