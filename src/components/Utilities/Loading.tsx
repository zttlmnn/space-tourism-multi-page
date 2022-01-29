import styles from "./Loading.module.scss";

const Loading = () => {
  return (
    <section className={styles["loading-container"]}>
      <figure>
        <img src="../../assets/shared/loading.svg" alt="" />
      </figure>
      <p>LOADING</p>
    </section>
  );
};

export default Loading;


