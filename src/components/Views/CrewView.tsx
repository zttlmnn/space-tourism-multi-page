import { FC, useContext } from "react";
import { CrewData } from "../models/data-model";
import Container from "../Utilities/Container";
import Description from "../Utilities/Description";
import Grid from "../Utilities/Grid";
import Title from "../Utilities/Title";
import styles from "./CrewView.module.scss";
import { TabAndSliderContext } from "../context/tabAndSlider-context";
import Button from "../Utilities/Button";

const CrewView: FC<{ crewData: CrewData[] }> = props => {
  const { state: crewState } = useContext(TabAndSliderContext)

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
              {props.crewData.map((_, index) => (
                <Button 
                  className={
                    crewState === index ? 
                    cssBtnStyle.join(" ") : 
                    cssBtnStyle[0]
                  }
                  key={index}
                  state={index}
                />
              ))}
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

