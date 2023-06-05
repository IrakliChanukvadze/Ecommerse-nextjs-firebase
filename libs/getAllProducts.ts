export default async function getAllProducts() {
  const res = await fetch("https://fakestoreapi.com/products");
  return res.json();
}
