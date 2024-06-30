import Image from "next/image";
import styles from "./users.module.css";

const Users = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Users</h2>
      <button className={`${styles.button} ${styles.add}`}>Add new</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  width={40}
                  height={40}
                  alt="user img"
                  className={styles.userImage}
                />
                John Doe
              </div>
            </td>
            <td>johndoe12@gmail.com</td>
            <td>20/06/2023</td>
            <td>Admin</td>
            <td>online</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>

              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  width={40}
                  height={40}
                  alt="user img"
                  className={styles.userImage}
                />
                Alice Grant
              </div>
            </td>
            <td>alicegrant34@gmail.com</td>
            <td>23/09/2023</td>
            <td>Not Admin</td>
            <td>offline</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>

              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src="/avatar.png"
                  width={40}
                  height={40}
                  alt="user img"
                  className={styles.userImage}
                />
                Kent Mark
              </div>
            </td>
            <td>markent56@gmail.com</td>
            <td>23/12/2023</td>
            <td>Admin</td>
            <td>offline</td>
            <td>
              <button className={`${styles.button} ${styles.view}`}>
                View
              </button>

              <button className={`${styles.button} ${styles.delete}`}>
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
