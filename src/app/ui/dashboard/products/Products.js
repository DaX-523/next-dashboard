import Image from "next/image";
import styles from "./products.module.css";

const Products = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Users</h2>
      <button className={`${styles.button} ${styles.add}`}>Add new</button>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Title</td>
            <td>Description</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Stock</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.product}>
                <Image
                  src="/avatar.png"
                  alt="user img"
                  height={40}
                  width={40}
                  className={styles.productImage}
                />
                Lenovo Ideapad
              </div>
            </td>
            <td>Laptop</td>
            <td>$1000</td>
            <td>18/01/2024</td>
            <td>Available</td>
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

export default Products;
