import { UserProfile } from "../User-profile/User-profile";
import styles from "./User.module.scss";
// import PropTypes from "prop-types";

export const User = ({
  isBattle,
  userId,
  isWinner,
  userProfile,
  resetUserProfiles,
}) => {
  return isBattle ? (
    <UserProfile isWinner={isWinner} userProfile={userProfile} />
  ) : (
    <div>
      {userProfile?.isLoaded && (
        <li className={styles.userItems}>
          <img
            className={styles.avatar}
            src={userProfile.profile.avatar}
            alt={userProfile.profile.name}
          ></img>
          <h2>@{userProfile.profile.name}</h2>
          <button
            onClick={() => resetUserProfiles(userId)}
            className={styles.reset}
            type="button"
          >
            Reset
          </button>
        </li>
      )}
    </div>
  );
};

// User.propTypes = {
//   userId: PropTypes.string.isRequired,
//   userProfile: PropTypes.shape({
//     profile: {
//       avatar: PropTypes.string.isRequired,
//       login: PropTypes.string,
//       name: PropTypes.string,
//       followers: PropTypes.number.isRequired,
//       following: PropTypes.number.isRequired,
//       publicRepos: PropTypes.number.isRequired,
//     },
//     isLoaded: PropTypes.bool.isRequired,
//   }),
//   isBattle: PropTypes.bool.isRequired,
//   isWinner: PropTypes.bool.isRequired,
//   resetUserProfiles: PropTypes.func.isRequired,
//   searchUserProfile: PropTypes.func.isRequired,
// };
