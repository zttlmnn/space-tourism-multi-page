import { Link } from "react-router-dom";
import styles from "./Error.module.scss";

const Error = () => {
  return (
    <section className={styles["error__container"]}>
      <h1>404</h1>
      <p>There's nothing here!</p>
      <Link to="/" className={styles["error__btn"]}>
        Go back home &#8594;
      </Link>
    </section>
  );
};

export default Error;
