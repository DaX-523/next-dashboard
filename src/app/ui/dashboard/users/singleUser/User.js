import Image from "next/image";
import styles from "./user.module.css";

const User = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.imagearea}>
          <Image
            src={"/avatar.png"}
            alt="user img"
            className={styles.userImg}
            width={250}
            height={250}
          />
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
        <form className={styles.form}>
          <input type="text" name="name" placeholder="Name" required />
          <input type="text" name="email" placeholder="Email" required />
          <input
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <input type="number" name="phone" placeholder="Phone" required />
          <select>
            <option value={false}>isAdmin?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <select>
            <option value={false}>isActive?</option>
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <textarea name="address" rows={12} placeholder="Address"></textarea>
          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
