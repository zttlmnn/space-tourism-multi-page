import { FC } from "react";
import styles from "./Container.module.scss";

type ContainerObj = {
  className?: string;
};

const Container: FC<ContainerObj> = (props) => {
  const cssStyle = [styles["background-container"], props.className];

  return <div className={cssStyle.join(" ")}>{props.children}</div>;
};

export default Container;
