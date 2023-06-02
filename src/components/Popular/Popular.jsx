import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { fetchPopularRepos } from "../../api/api.js";
import cx from "classnames";
import styles from "./Popular.module.scss";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

export const Popular = () => {
  const [currentLanguage, setCurrentLanguages] = useState("All");
  const [languageRepos, setLanguageRepos] = useState({
    repos: [],
    isLoading: false,
    error: undefined,
  });

  useEffect(() => {
    setLanguageRepos((prev) => ({
      ...prev,
      isLoading: true,
    }));
    fetchPopularRepos(currentLanguage)
      .then((repos) => {
        setLanguageRepos((prev) => ({
          ...prev,
          repos: repos.items,
          isLoading: false,
        }));
      })
      .catch();
  }, [currentLanguage]);

  return (
    <div className={styles.popularContainer}>
      <ul className={styles.languages}>
        {languages.map((lang) => (
          <li
            className={cx({
              [styles.active]: lang === currentLanguage,
            })}
            key={lang}
            onClick={() => setCurrentLanguages(lang)}
          >
            {lang}
          </li>
        ))}
      </ul>
      {languageRepos.isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.popularList}>
          {languageRepos.repos.map((repos, index) => {
            return (
              <li key={repos.name} className={styles.popularItem}>
                <div className={styles.popularRank}>#{index + 1}</div>
                <ul className={styles.spaceListItems}>
                  <li>
                    <img
                      className={styles.avatar}
                      src={repos.owner.avatar_url}
                      alt={repos.owner.login}
                    />
                  </li>
                  <li>
                    <a href={repos.html_url}>{repos.name}</a>
                  </li>
                  <li>@{repos.owner.login}</li>
                  <li>{repos.stargazers_count} stars</li>
                </ul>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
