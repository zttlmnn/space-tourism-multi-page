import React from "react";
import styles from "./HomeView.module.scss";

const HomeView = () => {
  return (
    <div className={styles["home-view"]}>
      <h5>So, you want to travel to</h5>
      <h1>Space</h1>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <button>Explore</button>
    </div>
  );
};

export default HomeView;
