import { getProducts } from "@/libs/getAllProducts";
import SingleItem from "@/components/SingleItem";
import { Grid } from "@/components/muiComponents/Mui";


import { Context } from "@/Context/context";
import { useContext } from "react";

export default function Home() {
  const { data } = useContext(Context);


  return (
    <Grid
      container
      spacing={6}
      justifyContent="center"
      alignItems="center"
      marginTop={"25px"}
    >
      {data
        ?.sort(function (a, b) {
          return b.id - a.id;
        })
        .map((item, index) => {
          return (
            <SingleItem
              {...item}
              key={item.id}
              id={index === 0 ? item.id : -1}
            />
          );
        })}
    </Grid>
  );
}
