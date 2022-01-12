import { FC, useState } from "react";
import { CrewData } from "../models/data-model";
import Description from "../Utilities/Description";
import Title from "../Utilities/Title";
import styles from "./CrewView.module.scss";

const CrewView: FC<{ crewData: CrewData[] }> = (props) => {
  const [crew, setCrew] = useState<number>(0);

  const crewChangeHandler = (crew: number) => {
    setCrew(crew);
  };

  const cssBtnStyle = [
    styles["crew-view__btn"],
    styles["crew-view__btn--active"],
  ];

  return (
    <div className={styles["crew-view"]}>
      <div className={styles["crew-view__grid-container"]}>
        <div className={styles["crew-view__grid-title"]}>
          <Title index="02" title="Meet your crew" />
        </div>
        <div className={styles["crew-view__grid-img"]}>
          <figure className={styles["crew-view__img"]}>
            <img
              src={`${process.env.PUBLIC_URL}../../${props.crewData[crew].images.png}`}
              //src="../../assets/crew/image-moon.png"
              alt=""
            />
          </figure>
          </div>
          <div className={styles["crew-view__grid-btns"]}>
            <section className={styles["crew-view__btns"]}>
              <button
                onClick={crewChangeHandler.bind(null, 0)}
                className={crew === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 1)}
                className={crew === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 2)}
                className={crew === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 3)}
                className={crew === 3 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
            </section>
          </div>
        <div className={styles["crew-view__grid-info"]}>
          <section className={styles["crew-view__info"]}>
            <h3>{props.crewData[crew].role}</h3>
            <h1>{props.crewData[crew].name}</h1>
            <Description text={props.crewData[crew].bio} />

          </section>
        </div>
        </div>
      </div>
  );
};

export default CrewView;
