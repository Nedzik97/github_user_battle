import { Link } from "react-router-dom";
import styles from "./home.module.scss";

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <h1>Github Battle: Battle your friends... and stuff.</h1>
      <Link to="/Battle" className={styles.button}>
        Battle
      </Link>
    </div>
  );
};
