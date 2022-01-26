import { FC, useContext } from "react";
import { CrewData } from "../models/data-model";
import Container from "../Utilities/Container";
import Description from "../Utilities/Description";
import Grid from "../Utilities/Grid";
import Title from "../Utilities/Title";
import styles from "./CrewView.module.scss";
import { TabAndSliderContext } from "../context/tabAndSlider-context";
import Button from "../Utilities/Button";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const CrewView: FC<{ crewData: CrewData[] }> = (props) => {
  const { page } = useContext(TabAndSliderContext);
  const crewPage = page[0];
  const direction = page[1];

  const cssBtnStyle = [
    styles["crew-view__btn"],
    styles["crew-view__btn--active"],
  ];

  return (
    <Container className={styles["crew-view"]}>
      <Grid>
        <Title index="02" title="Meet your crew" />
        <figure className={styles["crew-view__img"]}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={crewPage}
              src={`${process.env.PUBLIC_URL}../../${props.crewData[crewPage].images.png}`}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
              //src="../../assets/crew/image-moon.png"
              alt={props.crewData[crewPage].name}
            />
          </AnimatePresence>
        </figure>
        <section className={styles["crew-view__btns"]}>
          {props.crewData.map((_, i) => (
            <Button
              className={
                crewPage === i ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
              key={i}
              page={i}
            />
          ))}
        </section>
        <section className={styles["crew-view__info"]}>
          <h3>{props.crewData[crewPage].role}</h3>
          <h1>{props.crewData[crewPage].name}</h1>
          <Description text={props.crewData[crewPage].bio} />
        </section>
      </Grid>
    </Container>
  );
};

export default CrewView;
