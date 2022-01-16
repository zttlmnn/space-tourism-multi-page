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
          <Title index="02" title="Meet your crew" />
          <figure className={styles["crew-view__img"]}>
            <img
              src={`${process.env.PUBLIC_URL}../../${props.crewData[crewState].images.png}`}
              //src="../../assets/crew/image-moon.png"
              alt={props.crewData[crewState].name}
              />
          </figure>
            <section className={styles["crew-view__btns"]}>
              {props.crewData.map((_, i) => (
                <Button 
                  className={
                    crewState === i ? 
                    cssBtnStyle.join(" ") : 
                    cssBtnStyle[0]
                  }
                  key={i}
                  state={i}
                />
              ))}
            </section>
          <section className={styles["crew-view__info"]}>
            <h3>{props.crewData[crewState].role}</h3>
            <h1>{props.crewData[crewState].name}</h1>
            <Description text={props.crewData[crewState].bio} />
          </section>
        </Grid>
      </Container>
  );
};

export default CrewView;

