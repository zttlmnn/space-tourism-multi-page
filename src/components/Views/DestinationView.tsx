import { FC, useContext } from "react";
import { DestinationsData } from "../models/data-model";
import styles from "./DestinationView.module.scss";

import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";
import { TabAndSliderContext } from "../context/tabAndSlider-context";
import Button from "../Utilities/Button";

import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: {

      y: 300,
      opacity: 0
    },

  center: {
    zIndex: 1,
    y: 0,
    opacity: 1
  },
  exit:  {
      zIndex: 0,
      y: -700,
      opacity: 0
    }
};

const DestinationView: FC<{ destinationsData: DestinationsData[] }> = props => {
  const { state: destinationState } = useContext(TabAndSliderContext);

  const cssBtnStyle = [
    styles["destination-view__btn"],
    styles["destination-view__btn--active"],
  ];


  return (
    <Container className={styles["destination-view"]}>
      <Grid>
      <Title index="01" title="Pick your destination" />
          <figure className={styles["destination-view__img"]}>
            <AnimatePresence  >

            <motion.img
              key={destinationState}
              src={`${process.env.PUBLIC_URL}../../${props.destinationsData[destinationState].images.png}`}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}

              //src="../../assets/destination/image-moon.png"
              alt={props.destinationsData[destinationState].name}
              />
              </AnimatePresence>
          </figure>
          <section className={styles["destination-view__btns"]}>
            {props.destinationsData.map((destination, i) => (
              <Button 
                className={
                  destinationState === i ? 
                  cssBtnStyle.join(" ") : 
                  cssBtnStyle[0]
                } 
                key={i}
                state={i}
                text={destination.name}
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
      </Grid>
    </Container>
  );
};

export default DestinationView;
