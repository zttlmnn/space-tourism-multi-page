import React from "react";
import { Link } from "react-router-dom";
import Container from "../Utilities/Container";
import Description from "../Utilities/Description";
import Grid from "../Utilities/Grid";
import styles from "./HomeView.module.scss";

const HomeView = () => {

const text = "Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"

  return (
    <Container className={styles["home-view"]}>
      <Grid>
        <section className={styles["home-view__intro"]}>
          <h5>So, you want to travel to</h5>
          <h1>Space</h1>
          <Description
            text={text}
          />
        </section>
        <div  className={styles["home-view__link-container"]}>
        <Link 
          to="/destination"
          className={styles["home-view__link"]}
          >
          Explore
        </Link>
        </div>
      </Grid>
    </Container>
  );
};

export default HomeView;
