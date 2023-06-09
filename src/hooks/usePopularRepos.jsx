import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../api/api";

export const usePopularRepos = () => {
  const [currentLanguage, setCurrentLanguages] = useState("All");
  const [languageInfo, setLanguageInfo] = useState({
    repos: [],
    isLoading: false,
  });

  useEffect(() => {
    setLanguageInfo((prev) => ({
      ...prev,
      isLoading: true,
    }));
    fetchPopularRepos(currentLanguage).then((repos) => {
      setLanguageInfo((prev) => ({
        ...prev,
        repos: repos.items,
        isLoading: false,
      }));
    });
  }, [currentLanguage]);
  return { languageInfo, setCurrentLanguages, currentLanguage };
};
