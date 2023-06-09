export const sumValuesUser = (userProfile) => {
  let sum = 0;
  for (let key in userProfile) {
    if (typeof userProfile[key] == "number") {
      sum += userProfile[key];
    }
  }
  return sum;
};

export const players = {
  first: "Player One",
  second: "Player Two",
};

export const compareUsers = (firstProfilePoints, secondProfilePoints) => {
  return firstProfilePoints > secondProfilePoints
    ? players.first
    : players.second;
};

export const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];
