import { useState, useEffect } from "react";
import { Loading } from "../Loading/Loading";
import { popularRepos } from "../../utils";
import styles from "./Popular.module.scss";

export const Popular = () => {
  const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
  const [popularLang, setPopularLang] = useState({
    selectedLanguage: "All",
    repos: [],
  });

  const updateLanguage = (lang) => {
    setPopularLang({
      selectedLanguage: lang,
      repos: [],
    });
  };

  useEffect(() => {
    popularRepos(popularLang.selectedLanguage).then((repos) => {
      setPopularLang((prev) => ({
        ...prev,
        repos: repos.items,
      }));
    });
  }, [popularLang.selectedLanguage]);

  return (
    <div className={styles.popularContainer}>
      <ul className={styles.languages}>
        {languages.map((lang) => (
          <li
            style={
              lang === popularLang.selectedLanguage
                ? { color: "#d0021b" }
                : null
            }
            key={lang}
            onClick={() => updateLanguage(lang)}
          >
            {lang}
          </li>
        ))}
      </ul>
      {!popularLang.repos.length ? (
        <Loading />
      ) : (
        <ul className={styles.popularList}>
          {popularLang.repos.map((repos, index) => {
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
