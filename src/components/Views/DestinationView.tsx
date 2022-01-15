import { FC, useContext } from "react";
import { DestinationsData } from "../models/data-model";
import styles from "./DestinationView.module.scss";

import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";
import { TabAndSliderContext } from "../context/tabAndSlider-context";
import Button from "../Utilities/Button";

const DestinationView: FC<{ destinationsData: DestinationsData[] }> = props => {
  const {state: destinationState} = useContext(TabAndSliderContext)

  const destinationBtns = ["Moon", "Mars", "Europa", "Titan"];

  const cssBtnStyle = [
    styles["destination-view__btn"],
    styles["destination-view__btn--active"],
  ];

  console.log(cssBtnStyle);

  return (
    <Container className={styles["destination-view"]}>
      <Grid>
        <div className={styles["destination-view__flex-item"]}>
      <Title index="01" title="Pick your destination" />
          <figure className={styles["destination-view__img"]}>
            <img
              src={`${process.env.PUBLIC_URL}../../${props.destinationsData[destinationState].images.png}`}
              //src="../../assets/destination/image-moon.png"
              alt=""
            />
          </figure>
        </div>
        <div className={styles["destination-view__flex-item"]}>
          <section className={styles["destination-view__btns"]}>
            {destinationBtns.map((destination, index) => (
              <Button 
                className={
                  destinationState === index ? cssBtnStyle.join(" ") : cssBtnStyle[0]
                } 
                key={index}
                state={index}
                text={destination}
              />
            ))}
          </section>
          <section className={styles["destination-view__description"]}>
            <h2>{props.destinationsData[destinationState].name}</h2>
              <Description text={props.destinationsData[destinationState].description}/>
          </section>
          <section className={styles["destination-view__details"]}>
            <div>
              <h4>Avg. distance</h4>
              <h3>{props.destinationsData[destinationState].distance}</h3>
            </div>
            <div>
              <h4>Est. travel time</h4>
              <h3>{props.destinationsData[destinationState].travel}</h3>
            </div>
          </section>
        </div>
      </Grid>
    </Container>
  );
};

export default DestinationView;
