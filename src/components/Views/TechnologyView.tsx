import { FC, useState } from "react";
import { TechnologyData } from "../models/data-model";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./TechnologyView.module.scss";
import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";

const TechnologyView: FC<{ technologyData: TechnologyData[] }> = (props) => {
  const [technology, setTechnology] = useState<number>(0);
  const mediaQuery = useMediaQuery("(min-width: 90em)");

  const technologyChangeHandler = (technology: number) => {
    setTechnology(technology);
  };

  const cssBtnStyle = [
    styles["technology-view__btn"],
    styles["technology-view__btn--active"],
  ];

  const imgFormat = mediaQuery ? `${process.env.PUBLIC_URL}../../${props.technologyData[technology].images.portrait}` : `${process.env.PUBLIC_URL}../../${props.technologyData[technology].images.landscape}`

  return (
    <Container className={styles["technology-view"]}>
      <Grid>
      <div className={styles["technology-view__grid-title"]}>
        <Title index="03" title="Space Launch 101" />
      </div>
      <div className={styles["technology-view__grid-img"]}>
        <figure className={styles["technology-view__img"]}>
          <img
            src={imgFormat}
            //src="../../assets/technology/image-moon.png"
            alt=""
          />
        </figure>
      </div>
      <div className={styles["technology-view__grid-btns"]}>
        <section className={styles["technology-view__btns"]}>
          <button
            onClick={technologyChangeHandler.bind(null, 0)}
            className={
              technology === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            1
          </button>
          <button
            onClick={technologyChangeHandler.bind(null, 1)}
            className={
              technology === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            2
          </button>
          <button
            onClick={technologyChangeHandler.bind(null, 2)}
            className={
              technology === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
            }
          >
            3
          </button>
        </section>
      </div>
      <div className={styles["technology-view__grid-info"]}>

        <section className={styles["technology-view__info"]}>
          <h3>The terminology...</h3>
          <h1>{props.technologyData[technology].name}</h1>
          <Description text={props.technologyData[technology].description} />
        </section>
      </div>
      </Grid>
    </Container>
  );
};

export default TechnologyView;
