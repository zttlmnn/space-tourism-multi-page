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

  //console.log(props.destinationsData[0].images);


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
            <Button 
              className={
                destinationState === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              } 
              state={0}
              text="Moon" 
                />
            <Button 
              className={
                destinationState === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              } 
              state={1}
              text="Mars" 
                />
            <Button 
              className={
                destinationState === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              } 
              state={2}
              text="Europa" 
                />
            <Button 
              className={
                destinationState === 3 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              } 
              state={3}
              text="Titan" 
                />
{/* 
            <button
              onClick={destinationHandler.bind(null, 0)}
              className={
                destinationState === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Moon
            </button>
             */}
{/* 
            <button
              onClick={destinationHandler.bind(null, 1)}
              className={
                destinationState === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Mars
            </button>
            <button
              onClick={destinationHandler.bind(null, 2)}
              className={
                destinationState === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Europa
            </button>
            <button
              onClick={destinationHandler.bind(null, 3)}
              className={
                destinationState === 3 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Titan
            </button> */}
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
