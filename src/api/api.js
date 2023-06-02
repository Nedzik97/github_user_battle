export const fetchPopularRepos = (lang) => {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`
  ).then((res) => res.json());
};

export const fetchUserProfile = (search) => {
  return fetch(`https://api.github.com/users/${search}`).then((res) =>
    res.json()
  );
};
