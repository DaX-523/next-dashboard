import styles from "@/ui/login/login.module.css";

const Loginpage = () => {
  return (
    <div className={styles.container}>
      <form className={styles.form}>
        <h2 className={styles.heading}>Login</h2>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="username"
          required
        ></input>
        <label htmlFor="username">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          required
        ></input>
        <button className={styles.button}>Login</button>
      </form>
    </div>
  );
};

export default Loginpage;
