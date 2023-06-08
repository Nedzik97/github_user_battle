import styles from "./User-profile.module.scss";

export const UserProfile = ({ isWinner, userProfile }) => {
  return (
    <div>
      <h1 className={styles.header}>{isWinner ? "Winner" : "Loser"}</h1>
      <div className={styles.userItems}>
        <li>
          <img
            className={styles.userAvatar}
            src={userProfile.profile.avatar}
            alt={userProfile.profile.name}
          ></img>
          <h2>@{userProfile.profile.login}</h2>
        </li>
        <ul className={styles.spaceListItem}>
          <li>{userProfile.profile.name}</li>
          <li>Followers: {userProfile.profile.followers}</li>
          <li>Following: {userProfile.profile.following}</li>
          <li>Public Repos: {userProfile.profile.publicRepos}</li>
        </ul>
      </div>
    </div>
  );
};
