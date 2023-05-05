export const popularRepos = (lang) => {
  return fetch(
    `https://api.github.com/search/repositories?q=stars:>1+language:${lang}&sort=stars&order=desc&type=Repositories`
  ).then((res) => res.json());
};

export const sumValuesUser = (userProfile) => {
  let sum = 0;
  for (let key in userProfile) {
    if (typeof userProfile[key] == "number") {
      sum += userProfile[key];
    }
  }
  return sum;
};

export const compareUsers = (firstProfilePoints, secondProfilePoints) => {
  if (firstProfilePoints > secondProfilePoints) {
    return "firstUser";
  }
  return "secondUser";
};
