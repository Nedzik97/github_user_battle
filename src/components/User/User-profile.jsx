import styles from "./User.module.scss";
// import PropTypes from "prop-types";

export const User = ({ isBattle, isWinner, userProfile, children }) => {
  return (
    <div>
      {isBattle && (
        <h1 className={styles.header}>{isWinner ? "Winner" : "Loser"}</h1>
      )}
      <div className={styles.userItems}>
        <li>
          <img
            className={styles.userAvatar}
            src={userProfile.profile.avatar}
            alt={userProfile.profile.name}
          ></img>
          <h2>@{userProfile.profile.login}</h2>
        </li>
        {isBattle && (
          <ul className={styles.spaceListItem}>
            <li>{userProfile.profile.name}</li>
            <li>Followers: {userProfile.profile.followers}</li>
            <li>Following: {userProfile.profile.following}</li>
            <li>Public Repos: {userProfile.profile.publicRepos}</li>
          </ul>
        )}
      </div>
      {children}
    </div>
  );
};

// User.propTypes = {
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
