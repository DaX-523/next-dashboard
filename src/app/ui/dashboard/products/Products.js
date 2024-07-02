import Image from "next/image";
import styles from "./products.module.css";
import Link from "next/link";
import { fetchProducts } from "@/lib/data";
import { deleteProduct } from "@/lib/actions";

const Products = async () => {
  const products = await fetchProducts();
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Products</h2>
      <Link href={"/dashboard/products/add"}>
        <button className={`${styles.button} ${styles.add}`}>Add new</button>
      </Link>
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
          {products.map((product) => (
            <tr key={product.id}>
              <td>
                <div className={styles.product}>
                  <Image
                    src="/avatar.png"
                    alt="user img"
                    height={40}
                    width={40}
                    className={styles.productImage}
                  />
                  {product.title}
                </div>
              </td>
              <td>{product.desc}</td>
              <td>${product.price}</td>
              <td>{product.createdAt?.toString().slice(4, 16)}</td>
              <td>{product.stock}</td>
              <td>
                <Link href={"/dashboard/products/" + product.id}>
                  <button className={`${styles.button} ${styles.view}`}>
                    View
                  </button>
                </Link>
                <form action={deleteProduct}>
                  <input type="hidden" name="id" value={product.id}></input>
                  <button className={`${styles.button} ${styles.delete}`}>
                    Delete
                  </button>
                </form>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
