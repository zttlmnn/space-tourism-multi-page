import { FC } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./Navigation.module.scss";

type NavObj = {
  closeNavigation: () => void;
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
  return (
    <nav className={styles.navigation}>
        <ul className={styles["navigation__container"]}>
          {navBtns.map(({ text, path }, i) => (
            <li key={i}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  !isActive
                    ? styles["navigation__link"]
                    : cssLinkActive.join(" ")
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

    </nav>
  );
};

export default Navigation;
