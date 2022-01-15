import { FC, useContext, useState } from "react";
import { CrewData } from "../models/data-model";
import Container from "../Utilities/Container";
import Description from "../Utilities/Description";
import Grid from "../Utilities/Grid";
import Title from "../Utilities/Title";
import styles from "./CrewView.module.scss";
import { TabAndSliderContext } from "../context/tabAndSlider-context";

const CrewView: FC<{ crewData: CrewData[] }> = props => {
  const {state: crewState, setState: setCrewState} = useContext(TabAndSliderContext)

  //const [crew, setCrew] = useState<number>(0);

  const crewChangeHandler = (crew: number) => {
    setCrewState(crew);
  };

  const cssBtnStyle = [
    styles["crew-view__btn"],
    styles["crew-view__btn--active"],
  ];

  return (
    <Container className={styles["crew-view"]}>
      <Grid>
        <div className={styles["crew-view__grid-title"]}>
          <Title index="02" title="Meet your crew" />
        </div>
        <div className={styles["crew-view__grid-img"]}>
          <figure className={styles["crew-view__img"]}>
            <img
              src={`${process.env.PUBLIC_URL}../../${props.crewData[crewState].images.png}`}
              //src="../../assets/crew/image-moon.png"
              alt=""
            />
          </figure>
          </div>
          <div className={styles["crew-view__grid-btns"]}>
            <section className={styles["crew-view__btns"]}>
              <button
                onClick={crewChangeHandler.bind(null, 0)}
                className={crewState === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 1)}
                className={crewState === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 2)}
                className={crewState === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
              <button
                onClick={crewChangeHandler.bind(null, 3)}
                className={crewState === 3 ? cssBtnStyle.join(" ") : cssBtnStyle[0]}
              />
            </section>
          </div>
        <div className={styles["crew-view__grid-info"]}>
          <section className={styles["crew-view__info"]}>
            <h3>{props.crewData[crewState].role}</h3>
            <h1>{props.crewData[crewState].name}</h1>
            <Description text={props.crewData[crewState].bio} />
          </section>
        </div>
        </Grid>
      </Container>
  );
};

export default CrewView;

