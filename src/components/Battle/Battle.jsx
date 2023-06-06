import { User } from "../User/User";
import { useSearchUser } from "../../hooks/useSearchUser";
import { useBattle } from "../../hooks/useBattle";
import styles from "./Battle.module.scss";

export const Battle = () => {
  const { getBattle, isBattle, winner } = useBattle();
  const {
    inputValue: firstInput,
    setInputValue: firstSetInputValue,
    userProfile: firstUserProfile,
    searchUserProfile: firstSearchUserProfile,
    handleResetButton: firstHandleResetButton,
  } = useSearchUser();

  const {
    inputValue: secondInput,
    setInputValue: secondSetInputValue,
    userProfile: secondUserProfile,
    searchUserProfile: secondSearchUserProfile,
    handleResetButton: secondHandleResetButton,
  } = useSearchUser();

  return (
    <div>
      <div className={styles.battleContainer}>
        <User
          usernamePlayer={"Player One"}
          inputValue={firstInput}
          setInputValue={firstSetInputValue}
          userProfile={firstUserProfile}
          searchUserProfile={firstSearchUserProfile}
          handleResetButton={firstHandleResetButton}
          isBattle={isBattle}
          isWinner={winner === "firstUser"}
        />
        <User
          usernamePlayer={"Player Two"}
          inputValue={secondInput}
          setInputValue={secondSetInputValue}
          userProfile={secondUserProfile}
          searchUserProfile={secondSearchUserProfile}
          handleResetButton={secondHandleResetButton}
          isBattle={isBattle}
          isWinner={winner === "secondUser"}
        />
      </div>
      {firstUserProfile.isLoaded && secondUserProfile.isLoaded && !isBattle && (
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
