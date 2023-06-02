import styles from "./User.module.scss";
import PropTypes from "prop-types";

export const User = ({
  usernamePlayer,
  input,
  setInput,
  userProfile,
  searchUserProfile,
  isBattle,
  isWinner,
}) => {
  const handleForm = (event) => {
    event.preventDefault();
    if (input.inputValue) {
      searchUserProfile(input.inputValue);
    }
  };

  const handleChangeInput = (e) => {
    setInput((prev) => ({
      ...prev,
      inputValue: e.target.value,
    }));
  };

  const handleResetButton = () => {
    setInput((prev) => ({ ...prev, isLoaded: false, inputValue: "" }));
  };

  if (!isBattle) {
    return (
      <div>
        {!input.isLoaded && (
          <form className={styles.player} onSubmit={(e) => handleForm(e)}>
            <label htmlFor="username">{usernamePlayer}</label>
            <input
              value={input.inputValue}
              onInput={(e) => handleChangeInput(e)}
              id="username"
              type="text"
              placeholder="github username"
              autoComplete="off"
            ></input>
            <button className={styles.button} type="submit">
              Submit
            </button>
          </form>
        )}
        {input.isLoaded && (
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
  return (
    <div>
      <h1 className={styles.header}>{isWinner ? "Winner" : "Loser"}</h1>
      <div className={styles.userItems}>
        <li>
          <img
            className={styles.avatar}
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

User.propTypes = {
  usernamePlayer: PropTypes.string.isRequired,
  user: PropTypes.shape({
    inputValue: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  }),
  setUser: PropTypes.shape({
    inputValue: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    isLoaded: PropTypes.bool.isRequired,
  }),
  searchUsers: PropTypes.func.isRequired,
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
