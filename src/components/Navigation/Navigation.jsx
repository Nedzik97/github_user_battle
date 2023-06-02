import { NavLink } from "react-router-dom";
import cx from "classnames";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              cx({
                [styles.activeLink]: isActive,
              })
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Battle"
            className={({ isActive }) =>
              cx({
                [styles.activeLink]: isActive,
              })
            }
          >
            Battle
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Popular"
            className={({ isActive }) =>
              cx({
                [styles.activeLink]: isActive,
              })
            }
          >
            Popular
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
