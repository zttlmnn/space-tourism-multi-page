import { FC, useContext } from "react";
/* import styles from "./Button.module.scss";
 */import { PageContext } from "../context/page-context";

type BtnObj = {
  className?: string;
  text?: string;
  page: number;
};

const Button: FC<BtnObj> = (props) => {
  const { setPage } = useContext(PageContext);

  const pageHandler = (direction: number) => {
    setPage(direction);
  };

  return (
    <button
      className={props.className}
      onClick={pageHandler.bind(null, props.page)}
    >
      {props.text}
    </button>
  );
};

export default Button;
