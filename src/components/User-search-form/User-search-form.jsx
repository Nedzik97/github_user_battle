import styles from "./User-search-form.module.scss";

export const UserSearchForm = ({
  usernamePlayer,
  inputValue,
  searchUserProfile,
  setInputValue,
}) => {
  const handleForm = (event) => {
    event.preventDefault();
    if (inputValue) {
      searchUserProfile(inputValue);
    }
  };

  const handleChangeInput = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <form className={styles.player} onSubmit={(e) => handleForm(e)}>
      <label htmlFor="username">{usernamePlayer}</label>
      <input
        value={inputValue}
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
  );
};
