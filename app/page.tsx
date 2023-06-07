import Image from "next/image";
import styles from "./page.module.css";
import { getProducts } from "@/libs/getAllProducts";
import Link from "next/link";

export default async function Home() {
  // getAllProducts();
  const data = await getProducts();

  return (
    <main className={styles.main}>
      {data?.map((item) => (
        <Link href={`/products/${item.id}`} key={item.id}>
          {item.title}
        </Link>
      ))}
    </main>
  );
}
