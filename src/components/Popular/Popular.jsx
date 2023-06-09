import { Loading } from "../Loading/Loading";
import { usePopularRepos } from "../../hooks/usePopularRepos";
import { languages } from "../../utils";
import cx from "classnames";
import styles from "./Popular.module.scss";

const Languages = ({ setCurrentLanguages, currentLanguage }) => {
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

const Repositories = ({ languageInfo }) => {
  return languageInfo.repos.map((repos, index) => {
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

export const Popular = () => {
  const { languageInfo, setCurrentLanguages, currentLanguage } =
    usePopularRepos();
  return (
    <div className={styles.popularContainer}>
      <ul className={styles.languages}>
        <Languages
          setCurrentLanguages={setCurrentLanguages}
          currentLanguage={currentLanguage}
        />
      </ul>
      {languageInfo.isLoading ? (
        <Loading />
      ) : (
        <ul className={styles.popularList}>
          <Repositories languageInfo={languageInfo} />
        </ul>
      )}
    </div>
  );
};
