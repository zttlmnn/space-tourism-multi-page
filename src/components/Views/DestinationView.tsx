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
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const DestinationView: FC<{ destinationsData: DestinationsData[] }> = props => {
  const { page } = useContext(TabAndSliderContext);
  const destinationPage = page[0]
  const direction = page[1]

  const cssBtnStyle = [
    styles["destination-view__btn"],
    styles["destination-view__btn--active"],
  ];


  return (
    <Container className={styles["destination-view"]}>
      <Grid>
      <Title index="01" title="Pick your destination" />
          <figure className={styles["destination-view__img"]}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={destinationPage}
              src={`${process.env.PUBLIC_URL}../../${props.destinationsData[destinationPage].images.png}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.5 }
              }}

              //src="../../assets/destination/image-moon.png"
              alt={props.destinationsData[destinationPage].name}
              />
              </AnimatePresence>
          </figure>
          <section className={styles["destination-view__btns"]}>
            {props.destinationsData.map((destination, i) => (
              <Button 
                className={
                  destinationPage === i ? 
                  cssBtnStyle.join(" ") : 
                  cssBtnStyle[0]
                } 
                key={i}
                page={i}
                text={destination.name}
              />
            ))}
          </section>
          <section className={styles["destination-view__description"]}>
            <h2>{props.destinationsData[destinationPage].name}</h2>
              <Description text={props.destinationsData[destinationPage].description}/>
          </section>
          <section className={styles["destination-view__details"]}>
            <div>
              <h4>Avg. distance</h4>
              <h3>{props.destinationsData[destinationPage].distance}</h3>
            </div>
            <div>
              <h4>Est. travel time</h4>
              <h3>{props.destinationsData[destinationPage].travel}</h3>
            </div>
          </section>
      </Grid>
    </Container>
  );
};

export default DestinationView;
