import { FC, useState } from "react";
import { DestinationsData } from "../models/data-model";
import styles from "./DestinationView.module.scss";

import Title from "../Utilities/Title";
import Description from "../Utilities/Description";
import Container from "../Utilities/Container";

const DestinationView: FC<{ destinationsData: DestinationsData[] }> = (
  props
) => {
  const [destination, setDestination] = useState<number>(0);

  /* const [obj] = props.destinationsData!; */

  //console.log(obj.destinations.filter((item) => item.name === 'Moon'));
  /*   console.log(obj); */

  console.log(props.destinationsData[0].images);

  const destinationHandler = (destination: number) => {
    setDestination(destination);
  };

  const cssBtnStyle = [
    styles["destination-view__btn"],
    styles["destination-view__btn--active"],
  ];

  console.log(destination);

  return (
    <Container className={styles["destination-view"]}>
      <div className={styles["destination-view__flex-container"]}>
        <div className={styles["destination-view__flex-item"]}>
      <Title index="01" title="Pick your destination" />

          <figure className={styles["destination-view__img"]}>
            <img
              src={`${process.env.PUBLIC_URL}../../${props.destinationsData[destination].images.png}`}
              //src="../../assets/destination/image-moon.png"
              alt=""
            />
          </figure>
        </div>
        <div className={styles["destination-view__flex-item"]}>
          <section className={styles["destination-view__btns"]}>
            <button
              onClick={destinationHandler.bind(null, 0)}
              className={
                destination === 0 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Moon
            </button>
            <button
              onClick={destinationHandler.bind(null, 1)}
              className={
                destination === 1 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Mars
            </button>
            <button
              onClick={destinationHandler.bind(null, 2)}
              className={
                destination === 2 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Europa
            </button>
            <button
              onClick={destinationHandler.bind(null, 3)}
              className={
                destination === 3 ? cssBtnStyle.join(" ") : cssBtnStyle[0]
              }
            >
              Titan
            </button>
          </section>
          <section className={styles["destination-view__description"]}>
            <h2>{props.destinationsData[destination].name}</h2>
              <Description text={props.destinationsData[destination].description}/>
          </section>
          <section className={styles["destination-view__details"]}>
            <div>
              <h4>Avg. distance</h4>
              <h3>{props.destinationsData[destination].distance}</h3>
            </div>
            <div>
              <h4>Est. travel time</h4>
              <h3>{props.destinationsData[destination].travel}</h3>
            </div>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default DestinationView;
