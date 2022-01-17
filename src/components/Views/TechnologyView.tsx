import { FC, useContext } from "react";
import { TechnologyData } from "../models/data-model";
import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./TechnologyView.module.scss";
import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Container from "../Utilities/Container";
import Grid from "../Utilities/Grid";
import { TabAndSliderContext } from "../context/tabAndSlider-context";
import Button from "../Utilities/Button";


const TechnologyView: FC<{ technologyData: TechnologyData[] }> = (props) => {
  const {state: technologyState } = useContext(TabAndSliderContext);

  //const [technology, setTechnology] = useState<number>(0);
  const mediaQuery = useMediaQuery("(min-width: 90em)");

  const cssBtnStyle = [
    styles["technology-view__btn"],
    styles["technology-view__btn--active"],
  ];

  const imgFormat = mediaQuery ? 
    `${process.env.PUBLIC_URL}../../${props.technologyData[technologyState].images.portrait}` : 
    `${process.env.PUBLIC_URL}../../${props.technologyData[technologyState].images.landscape}`;

  return (
    <Container className={styles["technology-view"]}>
      <Grid>
        <Title index="03" title="Space Launch 101" />
        <figure className={styles["technology-view__img"]}>
          <img
            src={imgFormat}
            alt={props.technologyData[technologyState].name}
          />
        </figure>
        <section className={styles["technology-view__btns"]}>
          {props.technologyData.map((_, i) => (
            <Button 
              className={
                technologyState === i ? 
                cssBtnStyle.join(" ") : 
                cssBtnStyle[0]
              } 
              key={i}
              state={i}
              text={(i + 1).toString()}
            />
          ))}
        </section>
        <section className={styles["technology-view__info"]}>
          <h3>The terminology...</h3>
          <h1>{props.technologyData[technologyState].name}</h1>
          <Description text={props.technologyData[technologyState].description} />
        </section>
      </Grid>
    </Container>
  );
};

export default TechnologyView;
