import { User } from "../User/User";
import { useSearchUser } from "../../hooks/UseSearchUser";
import { useBattle } from "../../hooks/UseBattle";
import styles from "./Battle.module.scss";

export const Battle = () => {
  const { getBattle, isBattle, winner } = useBattle();
  const {
    input: firstInput,
    setInput: setFirstInput,
    userProfile: firstUserProfile,
    searchUserProfile: searchFirstUserProfile,
  } = useSearchUser();

  const {
    input: secondInput,
    setInput: setSecondInput,
    userProfile: secondUserProfile,
    searchUserProfile: searchSecondUserProfile,
  } = useSearchUser();

  return (
    <div>
      <div className={styles.battleContainer}>
        <User
          usernamePlayer={"Player One"}
          input={firstInput}
          setInput={setFirstInput}
          userProfile={firstUserProfile}
          searchUserProfile={searchFirstUserProfile}
          isBattle={isBattle}
          isWinner={winner === "firstUser"}
        />
        <User
          usernamePlayer={"Player Two"}
          input={secondInput}
          setInput={setSecondInput}
          userProfile={secondUserProfile}
          searchUserProfile={searchSecondUserProfile}
          isBattle={isBattle}
          isWinner={winner === "secondUser"}
        />
      </div>
      {firstInput.isLoaded && secondInput.isLoaded && !isBattle && (
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
