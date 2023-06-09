import styles from "./User-search-form.module.scss";

export const UserSearchForm = ({ userId, searchUserProfile }) => {
  const handleForm = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const inputValue = formData.get("user");
    if (inputValue) {
      searchUserProfile(userId, inputValue);
    }
  };

  return (
    <form className={styles.player} onSubmit={handleForm}>
      <label htmlFor="username">{userId}</label>
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
