import { useState } from "react";
import { sumValuesUser, compareUsers } from "../utils";
export const useBattle = () => {
  const [isBattle, setIsBattle] = useState(false);
  const [winner, setWinner] = useState();

  const getBattle = (userProfile) => {
    setIsBattle(true);
    const winner = compareUsers(
      sumValuesUser(userProfile),
      sumValuesUser(userProfile)
    );
    setWinner(winner);
  };
  return { getBattle, isBattle, winner };
};
