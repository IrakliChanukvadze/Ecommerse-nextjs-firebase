export default async function getCategory(category: string) {
  const res = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  return res.json();
}
