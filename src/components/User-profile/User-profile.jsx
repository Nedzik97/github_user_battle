import styles from "./User-profile.module.scss";

export const UserProfile = ({ isWinner, userProfile }) => {
  return (
    <div>
      <h1 className={styles.header}>{isWinner ? "Winner" : "Loser"}</h1>
      <div className={styles.userItems}>
        <li>
          <img
            className={styles.userAvatar}
            src={userProfile.avatar}
            alt={userProfile.name}
          ></img>
          <h2>@{userProfile.login}</h2>
        </li>
        <ul className={styles.spaceListItem}>
          <li>{userProfile.name}</li>
          <li>Followers: {userProfile.followers}</li>
          <li>Following: {userProfile.following}</li>
          <li>Public Repos: {userProfile.publicRepos}</li>
        </ul>
      </div>
    </div>
  );
};
