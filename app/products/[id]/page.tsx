import React from "react";
import { Metadata } from "next";
import getSingleProducts from "@/libs/getSingleProducts";

type Params = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  // const id = String(productId);

  return {
    title: String(id),
  };
}

async function ProductPage({ params: { id } }: Params) {
  // const id = String(productId);
  const data = await getSingleProducts(id);
  console.log(data);
  return <div>ProductPage - {id}</div>;
}

export default ProductPage;
