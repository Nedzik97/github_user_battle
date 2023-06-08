import { useState } from "react";
import { sumValuesUser, compareUsers } from "../utils";

export const useBattle = () => {
  const [isBattle, setIsBattle] = useState(false);
  const [winner, setWinner] = useState();

  const getBattle = (firstPlayer, secondPlayer) => {
    setIsBattle(true);
    const winner = compareUsers(
      sumValuesUser(firstPlayer),
      sumValuesUser(secondPlayer)
    );
    setWinner(winner);
  };

  return { getBattle, isBattle, winner };
};
