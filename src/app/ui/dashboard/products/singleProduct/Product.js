import Image from "next/image";
import styles from "./product.module.css";

const Product = () => {
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
          <input type="text" name="title" placeholder="Title" required />

          <input type="number" name="price" placeholder="Price" required />
          <input type="number" name="stock" placeholder="Stock" required />
          <input type="text" name="color" placeholder="Color" required />
          <input type="text" name="size" placeholder="Size" required />
          <select>
            <option value="general">Choose a category?</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <textarea
            name="description"
            rows={12}
            placeholder="Description"
          ></textarea>
          <button className={styles.button} type="submit">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default Product;
