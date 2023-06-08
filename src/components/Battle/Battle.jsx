import { User } from "../User/User";
import { useUserProfiles } from "../../hooks/useUserProfiles";
import { useBattle } from "../../hooks/useBattle";
import { players } from "../../utils";
import styles from "./Battle.module.scss";

export const Battle = () => {
  const { getBattle, isBattle, winner } = useBattle();
  const { userProfiles, resetUserProfile, searchUserProfile } =
    useUserProfiles();
  const firstUserProfile = userProfiles?.[players.first];
  const secondUserProfile = userProfiles?.[players.second];
  return (
    <div>
      <div className={styles.battleContainer}>
        <User
          userName={players.first}
          userProfile={firstUserProfile}
          resetUserProfiles={resetUserProfile}
          searchUserProfile={searchUserProfile}
          isBattle={isBattle}
          isWinner={winner === "firstUser"}
        />
        <User
          userName={players.second}
          userProfile={secondUserProfile}
          resetUserProfiles={resetUserProfile}
          searchUserProfile={searchUserProfile}
          isBattle={isBattle}
          isWinner={winner === "secondUser"}
        />
      </div>
      {firstUserProfile?.isLoaded &&
        secondUserProfile?.isLoaded &&
        !isBattle && (
          <button
            onClick={() =>
              getBattle(firstUserProfile.profile, secondUserProfile.profile)
            }
            className={styles.startBattle}
            type="button"
          >
            Battle
          </button>
        )}
    </div>
  );
};
