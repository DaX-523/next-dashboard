import { addProduct } from "@/lib/actions";
import styles from "./add.module.css";

const Add = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Add new product</h2>
      <form action={addProduct} className={styles.form}>
        <input type="text" name="title" placeholder="Title" required />

        <select>
          <option value="general">Choose a category?</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="stock" placeholder="Stock" required />
        <input type="text" name="color" placeholder="Color" required />
        <input type="text" name="size" placeholder="Size" required />

        <textarea
          name="description"
          rows={16}
          placeholder="Description"
        ></textarea>
        <button className={styles.button} type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Add;
