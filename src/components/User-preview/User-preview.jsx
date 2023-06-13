import styles from "./User-preview.module.scss";

export const UserPreview = ({ userProfile, children }) => {
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
      </div>
      {children}
    </div>
  );
};
