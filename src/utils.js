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
  return firstProfilePoints > secondProfilePoints ? "firstUser" : "secondUser";
};
