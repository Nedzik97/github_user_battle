import { User } from "../User/User-profile";
import { UserSearchForm } from "../User-search-form/User-search-form";
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
        {!firstUserProfile?.isLoaded ? (
          <UserSearchForm
            userId={players.first}
            searchUserProfile={searchUserProfile}
          />
        ) : (
          <User
            userId={players.first}
            userProfile={firstUserProfile}
            searchUserProfile={searchUserProfile}
            isBattle={isBattle}
            isWinner={winner === players.first}
          >
            <button
              onClick={() => resetUserProfile(players.first)}
              className={styles.reset}
              type="button"
            >
              Reset
            </button>
          </User>
        )}
        {!secondUserProfile?.isLoaded ? (
          <UserSearchForm
            userId={players.second}
            searchUserProfile={searchUserProfile}
          />
        ) : (
          <User
            userId={players.second}
            userProfile={secondUserProfile}
            resetUserProfiles={resetUserProfile}
            searchUserProfile={searchUserProfile}
            isBattle={isBattle}
            isWinner={winner === players.second}
          >
            <button
              onClick={() => resetUserProfile(players.second)}
              className={styles.reset}
              type="button"
            >
              Reset
            </button>
          </User>
        )}
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
