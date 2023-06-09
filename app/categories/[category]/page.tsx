import SingleItem from "@/components/SingleItem";
import { getCategory } from "@/libs/getCategory";
import { Metadata } from "next";
import React from "react";
import { Grid } from "@/components/muiComponents/Mui";

type Params = {
  params: {
    category: string;
  };
};

export async function generateMetadata({
  params: { category },
}: Params): Promise<Metadata> {
  // const category = String(productId);

  return {
    title: String(category),
  };
}

async function Category({ params: { category } }: Params) {
  const data = await getCategory(category.replace("%20", " "));
  return (
    <Grid
      container
      spacing={6}
      justifyContent="center"
      alignItems="center"
      marginTop={"25px"}
    >
      {data.map((item) => (
        <SingleItem {...item} key={item.id} />
      ))}
    </Grid>
  );
}

export default Category;
