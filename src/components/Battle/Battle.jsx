import { useState } from "react";
import { User } from "../User/User";
import { SearchUser } from "../../hooks/SearchUser";
import { sumValuesUser, compareUsers } from "../../utils";
import styles from "./Battle.module.scss";

export const Battle = () => {
  const [isBattle, setIsBattle] = useState(false);
  const [winner, setWinner] = useState();
  const {
    input: firstUser,
    setInput: setFirstUser,
    userProfile: firstUserProfile,
    searchUserProfile: searchFirstUserProfile,
  } = SearchUser();

  const {
    input: secondUser,
    setInput: setSecondUser,
    userProfile: secondUserProfile,
    searchUserProfile: searchSecondUserProfile,
  } = SearchUser();

  const getBattle = () => {
    setIsBattle(true);
    const winner = compareUsers(
      sumValuesUser(firstUserProfile),
      sumValuesUser(secondUserProfile)
    );
    setWinner(winner);
  };

  return (
    <div>
      <div className={styles.battleContainer}>
        <User
          usernamePlayer={"Player One"}
          user={firstUser}
          setUser={setFirstUser}
          userProfile={firstUserProfile}
          searchUserProfile={searchFirstUserProfile}
          isBattle={isBattle}
          isWinner={winner === "firstUser"}
        />
        <User
          usernamePlayer={"Player Two"}
          user={secondUser}
          setUser={setSecondUser}
          userProfile={secondUserProfile}
          searchUserProfile={searchSecondUserProfile}
          isBattle={isBattle}
          isWinner={winner === "secondUser"}
        />
      </div>
      {firstUser.isLoaded && secondUser.isLoaded && !isBattle && (
        <button
          onClick={() => getBattle()}
          className={styles.startBattle}
          type="button"
        >
          Battle
        </button>
      )}
    </div>
  );
};
