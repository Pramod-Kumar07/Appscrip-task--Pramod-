import Image from "next/image";
import styles from "./page.module.css";
import Shop from "@/components/shop/Index";

export default function Home() {
  // fetch('https://fakestoreapi.com/products')
  // .then(response => response.json())
  // .then(data => console.log(data));
  return (
    <div className={styles.page}>
      <Shop />
    </div>
  );
}
