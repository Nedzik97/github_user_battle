import { Loading } from "../Loading/Loading";
import { usePopularRepos } from "../../hooks/usePopularRepos";
import { languages } from "../../utils";
import cx from "classnames";
import styles from "./Popular.module.scss";

export const Popular = () => {
  const { languageRepos, setCurrentLanguages, currentLanguage } =
    usePopularRepos();
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
