import { useState, useEffect } from "react";
import styles from "./Loading.module.scss";

const loadingFinalState = "Loading...";
const defaultLoadingState = "Loading";

export const Loading = () => {
  const [loadingText, setLoadingText] = useState(defaultLoadingState);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (loadingText === loadingFinalState) {
        setLoadingText(defaultLoadingState);
        return;
      }
      setLoadingText((prevState) => `${prevState}.`);
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [loadingText]);

  return <p className={styles.loadingText}>{loadingText}</p>;
};
