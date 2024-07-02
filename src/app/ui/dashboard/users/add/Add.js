import { addUser } from "@/lib/actions";
import styles from "./add.module.css";

const Add = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add new User</h2>
      <form action={addUser} className={styles.form}>
        <input type="text" name="name" placeholder="Name" required />
        <input type="text" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input type="number" name="phone" placeholder="Phone" required />
        <select name="isAdmin">
          <option value={false}>isAdmin?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <select name="isActive">
          <option value={false}>isActive?</option>
          <option value={true}>Yes</option>
          <option value={false}>No</option>
        </select>
        <textarea name="address" rows={16} placeholder="Address"></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
