import { FC, useContext } from "react";
import styles from "./CrewView.module.scss";
import { CrewData } from "../models/data-model";
import { PageContext } from "../context/page-context";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";
import Title from "../Utilities/Title";
import Button from "../Utilities/Button";
import Description from "../Utilities/Description";

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
  const { page } = useContext(PageContext);
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
