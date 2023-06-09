import styles from "./User-preview.module.scss";

export const UserPreview = ({ userProfile }) => {
  return (
    <div>
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
