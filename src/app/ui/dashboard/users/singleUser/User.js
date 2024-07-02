import Image from "next/image";
import styles from "./user.module.css";
import { fetchUser } from "@/lib/data";
import { updateUser } from "@/lib/actions";

const User = async ({ id }) => {
  const user = await fetchUser(id);
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
        {user.username}
      </div>
      <div className={styles.formContainer}>
        <form action={updateUser} className={styles.form}>
          <input type="hidden" name="id" value={user.id}></input>
          <input type="text" name="name" placeholder={user.username} />
          <input type="text" name="email" placeholder={user.email} />
          <input type="password" name="password" placeholder="Password" />
          <input type="number" name="phone" placeholder={user.phone} />
          <label>isAdmin</label>
          <select name="isAdmin" id="isAdmin">
            <option value={true} selected={user.isAdmin}>
              Yes
            </option>
            <option value={false} selected={!user.isAdmin}>
              No
            </option>
          </select>
          <label>isActive</label>
          <select name="isActive" id="isActive">
            <option value={true} selected={user.isActive}>
              Yes
            </option>
            <option value={false} selected={!user.isActive}>
              No
            </option>
          </select>
          <textarea
            name="address"
            rows={12}
            placeholder={user.address}
          ></textarea>
          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default User;
