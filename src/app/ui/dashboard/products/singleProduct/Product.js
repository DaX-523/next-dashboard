import Image from "next/image";
import styles from "./product.module.css";
import { fetchProduct } from "@/lib/data";
import { updateProduct } from "@/lib/actions";

const Product = async ({ id }) => {
  const product = await fetchProduct(id);
  console.log(product);
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
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateProduct} className={styles.form}>
          <input type="hidden" name="id" value={product.id}></input>
          <input type="text" name="title" placeholder={product.title} />

          <input type="number" name="price" placeholder={product.price} />
          <input type="number" name="stock" placeholder={product.stock} />
          <input type="text" name="color" placeholder={product.color} />
          <input type="text" name="size" placeholder={product.size} />
          <select>
            <option value="general">Choose a category?</option>
            <option value="kitchen">Kitchen</option>
            <option value="phone">Phone</option>
            <option value="computer">Computer</option>
          </select>
          <textarea
            name="description"
            rows={12}
            placeholder={product.title}
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
