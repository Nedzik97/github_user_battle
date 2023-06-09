import styles from "./User-profile.module.scss";
import PropTypes from "prop-types";

export const UserProfile = ({ userProfile, children }) => {
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

UserProfile.propTypes = {
  userProfile: PropTypes.shape({
    userId: {
      profile: {
        avatar: PropTypes.string.isRequired,
        login: PropTypes.string,
        name: PropTypes.string,
        followers: PropTypes.number.isRequired,
        following: PropTypes.number.isRequired,
        publicRepos: PropTypes.number.isRequired,
      },
      isLoaded: PropTypes.bool.isRequired,
    },
  }),
};
