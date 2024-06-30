import Image from "next/image";
import styles from "./transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.userInfo}>
                <Image
                  src="/avatar.png"
                  className={styles.userImage}
                  alt="user img"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>20/06/2023</td>
            <td>$1200</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.userInfo}>
                <Image
                  src="/avatar.png"
                  className={styles.userImage}
                  alt="user img"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.completed}`}>
                Completed
              </span>
            </td>
            <td>23/09/2023</td>
            <td>$800</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.userInfo}>
                <Image
                  src="/avatar.png"
                  className={styles.userImage}
                  alt="user img"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>27/09/2023</td>
            <td>$1800</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.userInfo}>
                <Image
                  src="/avatar.png"
                  className={styles.userImage}
                  alt="user img"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>23/12/2023</td>
            <td>$2600</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>
              <div className={styles.userInfo}>
                <Image
                  src="/avatar.png"
                  className={styles.userImage}
                  alt="user img"
                  width={40}
                  height={40}
                />
                John Doe
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancel}`}>
                Cancelled
              </span>
            </td>
            <td>28/02/2024</td>
            <td>$1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
