import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../api/api";

export const usePopularRepos = () => {
  const [currentLanguage, setCurrentLanguages] = useState("All");
  const [languageRepos, setLanguageRepos] = useState({
    repos: [],
    isLoading: false,
  });

  useEffect(() => {
    setLanguageRepos((prev) => ({
      ...prev,
      isLoading: true,
    }));
    fetchPopularRepos(currentLanguage).then((repos) => {
      setLanguageRepos((prev) => ({
        ...prev,
        repos: repos.items,
        isLoading: false,
      }));
    });
  }, [currentLanguage]);
  return { languageRepos, setCurrentLanguages, currentLanguage };
};
