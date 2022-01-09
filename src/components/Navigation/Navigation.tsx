import { FC } from "react";
import { NavLink } from "react-router-dom";
import useMediaQuery from "../../hooks/useMediaQuery";

import styles from "./Navigation.module.scss";

type Props = {
  closeNavigation: () => void;
};

const Navigation: FC<Props> = (props) => {
  const cssLinkActive = [
    styles["navigation__link"],
    styles["navigation__link--active"],
  ];

  const mediaQueryTablet = useMediaQuery("(min-width: 48em)");
  const mediaQueryDesktop = useMediaQuery("(min-width: 90em)");

  console.log(cssLinkActive.join(" "));
  return (
    <nav className={styles.navigation}>
      <div className={styles["navigation__container"]}>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                !isActive ? styles["navigation__link"] : cssLinkActive.join(" ")
              }
              onClick={props.closeNavigation}
            >
              {(!mediaQueryTablet || mediaQueryDesktop) && <span>00</span>}Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/destination"
              className={({ isActive }) =>
                !isActive ? styles["navigation__link"] : cssLinkActive.join(" ")
              }
              onClick={props.closeNavigation}
            >
              {(!mediaQueryTablet || mediaQueryDesktop) && <span>01</span>}Destination
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/crew"
              className={({ isActive }) =>
                !isActive ? styles["navigation__link"] : cssLinkActive.join(" ")
              }
              onClick={props.closeNavigation}
            >
              {(!mediaQueryTablet || mediaQueryDesktop) && <span>02</span>}Crew
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/technology"
              className={({ isActive }) =>
                !isActive ? styles["navigation__link"] : cssLinkActive.join(" ")
              }
              onClick={props.closeNavigation}
            >
              {(!mediaQueryTablet || mediaQueryDesktop) && <span>03</span>}Technology
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
/* 
<NavLink className={({ isActive }) => isActive ? "red" : "blue"} />
 */
