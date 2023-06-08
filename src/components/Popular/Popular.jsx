import { Loading } from "../Loading/Loading";
import { usePopularRepos } from "../../hooks/usePopularRepos";
import { languages } from "../../utils";
import cx from "classnames";
import styles from "./Popular.module.scss";

export const Popular = () => {
  const { languageRepos, setCurrentLanguages, currentLanguage } =
    usePopularRepos();
  const Languages = () => {
    return languages.map((lang) => (
      <li
        className={cx({
          [styles.active]: lang === currentLanguage,
        })}
        key={lang}
        onClick={() => setCurrentLanguages(lang)}
      >
        {lang}
      </li>
    ));
  };
  const Repositories = () => {
    return languageRepos.repos.map((repos, index) => {
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
    });
  };
  return (
    <div className={styles.popularContainer}>
      <ul className={styles.languages}>
        <Languages />
      </ul>
      {languageRepos.isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.popularList}>
          <Repositories />
        </ul>
      )}
    </div>
  );
};
