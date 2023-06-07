import MuiContainer from "@/components/muiComponents/MuiContainer";
import styles from "./page.module.css";
import { getProducts } from "@/libs/getAllProducts";
import Link from "next/link";
import MuiButton from "@/components/muiComponents/MuiButton";
import MuiGrid from "@/components/muiComponents/MuiGrid";

export default async function Home() {
  // getAllProducts();
  const data = await getProducts();
  const props = { variant: "contained" };
  return (
    <main className={styles.main}>
      <MuiContainer>
        {data?.map((item) => (
          <Link href={`/products/${item.id}`} key={item.id}>
            {item.title}
          </Link>
        ))}

        <MuiGrid container sx={{ width: "500px" }}>
          <MuiGrid item xs={6}>
            <MuiButton variant="contained" disabled={false}>
              blabla
            </MuiButton>
          </MuiGrid>
          <MuiGrid item xs={6}>
            <MuiButton variant="contained" disabled={false}>
              blabla
            </MuiButton>
          </MuiGrid>
        </MuiGrid>
      </MuiContainer>
    </main>
  );
}
