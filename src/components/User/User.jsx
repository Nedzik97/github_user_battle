import { UserSearchForm } from "../User-search-form/User-search-form";
import { UserProfile } from "../User-profile/User-profile";
import styles from "./User.module.scss";
import PropTypes from "prop-types";

export const User = ({
  usernamePlayer,
  isBattle,
  isWinner,
  searchUserProfile,
  userProfile,
  handleResetButton,
}) => {
  if (!isBattle) {
    return (
      <div>
        {!userProfile.isLoaded && (
          <UserSearchForm
            usernamePlayer={usernamePlayer}
            searchUserProfile={searchUserProfile}
          />
        )}
        {userProfile.isLoaded && (
          <li className={styles.userItems}>
            <img
              className={styles.avatar}
              src={userProfile.avatar}
              alt={userProfile.inputValue}
            ></img>
            <h2>@{userProfile.name}</h2>
            <button
              onClick={() => handleResetButton()}
              className={styles.reset}
              type="button"
            >
              Reset
            </button>
          </li>
        )}
      </div>
    );
  }
  return <UserProfile isWinner={isWinner} userProfile={userProfile} />;
};

User.propTypes = {
  usernamePlayer: PropTypes.string.isRequired,
  input: PropTypes.shape({
    inputValue: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.shape({
    inputValue: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  }),
  userProfile: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    login: PropTypes.string,
    name: PropTypes.string,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired,
    publicRepos: PropTypes.number.isRequired,
    isClickBattle: PropTypes.bool.isRequired,
  }),
  isBattle: PropTypes.bool.isRequired,
  isWinner: PropTypes.string.isRequired,
};
