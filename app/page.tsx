import Image from "next/image";
import styles from "./page.module.css";
import getAllProducts from "@/libs/getAllProducts";

export default function Home() {
  const allData = getAllProducts();
  return (
    <main className={styles.main}>
      <h2>Ecommerse practice</h2>
    </main>
  );
}
