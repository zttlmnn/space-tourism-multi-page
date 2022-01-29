import { FC, useContext } from "react";
import styles from "./TechnologyView.module.scss";
import { TechnologyData } from "../models/data-model";
import { PageContext } from "../context/page-context";
import { motion, AnimatePresence } from "framer-motion";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";
import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Button from "../Utilities/Button";
import useMediaQuery from "../../hooks/useMediaQuery";
import { MEDIA_QUERY_DESKTOP } from "../../config";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 0,
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

const TechnologyView: FC<{ technologyData: TechnologyData[] }> = (props) => {
  const { page } = useContext(PageContext);
  const technologyPage = page[0];
  const direction = page[1];

  const mediaQuery = useMediaQuery(`${MEDIA_QUERY_DESKTOP}`);

  const cssBtnStyle = [
    styles["technology-view__btn"],
    styles["technology-view__btn--active"],
  ];

  const imgFormat = mediaQuery
    ? `${process.env.PUBLIC_URL}../../${props.technologyData[technologyPage].images.portrait}`
    : `${process.env.PUBLIC_URL}../../${props.technologyData[technologyPage].images.landscape}`;

  return (
    <Container className={styles["technology-view"]}>
      <Grid>
        <Title index="03" title="Space Launch 101" />
        <figure className={styles["technology-view__img"]}>
          <AnimatePresence initial={false} custom={direction}>
            <motion.img
              key={technologyPage}
              src={imgFormat}
              custom={direction}
              alt={props.technologyData[technologyPage].name}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 },
              }}
            />
          </AnimatePresence>
        </figure>
        <section className={styles["technology-view__btns"]}>
          {props.technologyData.map((_, i) => (
            <Button
              className={
                technologyPage === i ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
              key={i}
              page={i}
              text={(i + 1).toString()}
            />
          ))}
        </section>
        <section className={styles["technology-view__info"]}>
          <h3>The terminology...</h3>
          <h1>{props.technologyData[technologyPage].name}</h1>
          <Description
            text={props.technologyData[technologyPage].description}
          />
        </section>
      </Grid>
    </Container>
  );
};

export default TechnologyView;
