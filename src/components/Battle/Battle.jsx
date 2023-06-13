import { UserProfile } from "../User-profile/User-profile";
import { UserSearchForm } from "../User-search-form/User-search-form";
import { UserPreview } from "../User-preview/User-preview";
import { useUserProfiles } from "../../hooks/useUserProfiles";
import { useBattle } from "../../hooks/useBattle";
import { players } from "../../utils";
import styles from "./Battle.module.scss";

const Reset = ({ resetUserProfile, player }) => {
  return (
    <button
      onClick={() => resetUserProfile(player)}
      className={styles.reset}
      type="button"
    >
      Reset
    </button>
  );
};

const BattleResult = ({ isWinner }) => {
  return <h1 className={styles.header}>{isWinner ? "Winner" : "Loser"}</h1>;
};

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
          <div>
            {isBattle && <BattleResult isWinner={winner === players.first} />}
            <UserPreview
              userId={players.first}
              userProfile={firstUserProfile}
              searchUserProfile={searchUserProfile}
            >
              {!isBattle ? (
                <Reset
                  resetUserProfile={resetUserProfile}
                  player={players.first}
                ></Reset>
              ) : (
                <UserProfile userProfile={firstUserProfile} />
              )}
            </UserPreview>
          </div>
        )}

        {!secondUserProfile?.isLoaded ? (
          <UserSearchForm
            userId={players.second}
            searchUserProfile={searchUserProfile}
          />
        ) : (
          <div>
            {isBattle && <BattleResult isWinner={winner === players.second} />}
            <UserPreview
              userId={players.second}
              userProfile={secondUserProfile}
              searchUserProfile={searchUserProfile}
            >
              {!isBattle ? (
                <Reset
                  resetUserProfile={resetUserProfile}
                  player={players.second}
                ></Reset>
              ) : (
                <UserProfile userProfile={secondUserProfile} />
              )}
            </UserPreview>
          </div>
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
