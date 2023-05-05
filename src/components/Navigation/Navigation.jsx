import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navigation.module.scss";

export const Navigation = () => {
  const [isCurrentPage, setIsCurrentPage] = useState("Home");
  const handleSwitchPage = (page) => {
    setIsCurrentPage(page);
  };

  return (
    <div>
      <ul className={styles.navigation}>
        <li>
          <Link
            to="/"
            className={isCurrentPage === "Home" ? `${styles.active}` : null}
            onClick={() => handleSwitchPage("Home")}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/Battle"
            className={isCurrentPage === "Battle" ? `${styles.active}` : null}
            onClick={() => handleSwitchPage("Battle")}
          >
            Battle
          </Link>
        </li>
        <li>
          <Link
            to="/Popular"
            className={isCurrentPage === "Popular" ? `${styles.active}` : null}
            onClick={() => handleSwitchPage("Popular")}
          >
            Popular
          </Link>
        </li>
      </ul>
    </div>
  );
};
