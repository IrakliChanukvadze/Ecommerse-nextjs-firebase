import { getProducts } from "@/libs/getAllProducts";
import SingleItem from "@/components/SingleItem";
import { Grid } from "@/components/muiComponents/Mui";
import { addToCart } from "@/libs/addToCart";

export default async function Home() {
  let data = await getProducts();
  // const props = { variant: "contained" };
  // const filterCategory = async (category: string) => {
  //   data = await getCategory(category);
  // };

  return (
    <Grid
      container
      spacing={6}
      justifyContent="center"
      alignItems="center"
      marginTop={"25px"}
    >
      {data?.map((item) => (
        <SingleItem {...item} key={item.id} />
      ))}
    </Grid>
  );
}
