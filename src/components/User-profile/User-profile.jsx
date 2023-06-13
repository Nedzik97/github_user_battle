import styles from "./User-profile.module.scss";

export const UserProfile = ({ userProfile }) => {
  return (
    <div>
      <ul className={styles.spaceListItem}>
        <li>{userProfile.profile.name}</li>
        <li>Followers: {userProfile.profile.followers}</li>
        <li>Following: {userProfile.profile.following}</li>
        <li>Public Repos: {userProfile.profile.publicRepos}</li>
      </ul>
    </div>
  );
};
