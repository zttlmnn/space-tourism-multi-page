import { FC, useState } from "react";
import { TechnologyData } from "../models/data-model";
import styles from "./TechnologyView.module.scss";

const TechnologyView: FC<{ technologyData: TechnologyData[] }> = (props) => {
  const [technology, setTechnology] = useState<number>(0);

  const technologyChangeHandler = (technology: number) => {
    setTechnology(technology);
  };

  const cssBtnStyle = [
    styles["technology-view__btn"],
    styles["technology-view__btn--active"],
  ];

  return (
    <div className={styles["technology-view"]}>
      <div className={styles["technology-view__grid-container"]}>
      <div className={styles["technology-view__grid-title"]}>
        <div className={styles["technology-view__title"]}>
          <span>03</span>
          <h2>Space Launch 101</h2>
        </div>
      </div>
      <div className={styles["technology-view__grid-img"]}>
        <div className={styles["technology-view__img"]}>
          <img
            src={`${process.env.PUBLIC_URL}../../${props.technologyData[technology].images.landscape}`}
            //src="../../assets/technology/image-moon.png"
            alt=""
          />
        </div>
      </div>
      <div className={styles["technology-view__grid-btns"]}>
        <div className={styles["technology-view__btns"]}>
          <button
            onClick={technologyChangeHandler.bind(null, 0)}
            className={
              technology === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            1
          </button>
          <button
            onClick={technologyChangeHandler.bind(null, 1)}
            className={
              technology === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            2
          </button>
          <button
            onClick={technologyChangeHandler.bind(null, 2)}
            className={
              technology === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            3
          </button>
        </div>
      </div>
      <div className={styles["technology-view__grid-info"]}>

        <div className={styles["technology-view__info"]}>
          <h3>The terminology...</h3>
          <h1>{props.technologyData[technology].name}</h1>
          <p>{props.technologyData[technology].description}</p>
        </div>
      </div>
      </div>
    </div>
  );
};

export default TechnologyView;
