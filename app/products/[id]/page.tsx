import React from "react";
import { Metadata } from "next";

import Link from "next/link";
import { getSingleProduct } from "@/libs/getSingleProducts";
import { getProducts } from "@/libs/getAllProducts";

type Params = {
  params: {
    id: number;
  };
};

export async function generateMetadata({
  params: { id },
}: Params): Promise<Metadata> {
  const data = await getSingleProduct(id);

  return {
    title: data[0].title,
  };
}

async function ProductPage({ params: { id } }: Params) {
  const data = await getSingleProduct(id);

  return (
    <div>
      ProductPage - {id}
      {data.map((item) => (
        <h3 key={item.id}>{item.id}</h3>
      ))}
      <Link href="/">link to home</Link>
    </div>
  );
}

export default ProductPage;
