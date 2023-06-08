import styles from "./User-search-form.module.scss";

export const UserSearchForm = ({ usernamePlayer, searchUserProfile }) => {
  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("user");
    console.log(inputValue);
    if (inputValue) {
      searchUserProfile(inputValue);
    }
  };

  return (
    <form className={styles.player} onSubmit={handleForm}>
      <label htmlFor="username">{usernamePlayer}</label>
      <input
        id="username"
        type="text"
        name="user"
        placeholder="github username"
        autoComplete="off"
      ></input>
      <button className={styles.button} type="submit">
        Submit
      </button>
    </form>
  );
};
