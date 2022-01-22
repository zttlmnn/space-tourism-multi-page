import { FC } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./Navigation.module.scss";
import { motion } from "framer-motion";

type NavObj = {
  showNavigation: boolean;
  closeNavigation: () => void;
};

const variants = {
  open: { opacity: 1, x: 0 },
  closed: {
    opacity: 0,
    x: "100%",
  },
};

const Navigation: FC<NavObj> = (props) => {
  const cssLinkActive = [
    styles["navigation__link"],
    styles["navigation__link--active"],
  ];

  const navBtns = [
    { text: "Home", path: "/" },
    { text: "Destination", path: "/destination" },
    { text: "Crew", path: "/crew" },
    { text: "Technology", path: "/technology" },
  ];

  const mediaQueryTablet = useMediaQuery("(min-width: 48em)");
  const mediaQueryDesktop = useMediaQuery("(min-width: 90em)");

  console.log(cssLinkActive.join(" "));

  const navigation = (
    <ul className={styles["navigation__container"]}>
      {navBtns.map(({ text, path }, i) => (
        <li key={i}>
          <NavLink
            to={path}
            className={({ isActive }) =>
              !isActive ? styles["navigation__link"] : cssLinkActive.join(" ")
            }
            onClick={props.closeNavigation}
          >
            {(!mediaQueryTablet || mediaQueryDesktop) && (
              <span>{`0${i.toString()}`}</span>
            )}
            {text}
          </NavLink>
        </li>
      ))}
    </ul>
  );

  if (mediaQueryTablet)
    return <nav className={styles.navigation}>{navigation}</nav>;

  return (
    <motion.nav
      className={styles.navigation}
      animate={props.showNavigation ? "open" : "closed"}
      variants={variants}
    >
      {navigation}
    </motion.nav>
  );
};

export default Navigation;
