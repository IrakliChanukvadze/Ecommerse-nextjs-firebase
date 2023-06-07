import { getCategory } from "@/libs/getCategory";
import { Metadata } from "next";
import React from "react";

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
  const data = await getCategory(category);
  return (
    <div>
      Category {category}
      {data.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </div>
  );
}

export default Category;
