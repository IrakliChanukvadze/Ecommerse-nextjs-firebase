import { Container } from "@/components/muiComponents/Mui";
import styles from "./page.module.css";
import { getProducts } from "@/libs/getAllProducts";
import Link from "next/link";
import SingleItem from "@/components/SingleItem";
import { Grid } from "@/components/muiComponents/Mui";
import { Button } from "@/components/muiComponents/Mui";

export default async function Home() {
  // getAllProducts();
  const data = await getProducts();
  const props = { variant: "contained" };
  return (
    // <main className={styles.main}>
    <Container maxWidth="xl">
      <Grid
        container
        spacing={6}
        // display="flex"
        justifyContent="center"
        alignItems="center"
      >
        {data?.map((item) => (
          <SingleItem {...item} key={item.id} />
        ))}
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        // sx={{
        //   "&:hover": {
        //     color: "#ffffff",
        //     boxShadow: "none",
        //   },
        // }}
      >
        Button
      </Button>
    </Container>
    // </main>
  );
}
