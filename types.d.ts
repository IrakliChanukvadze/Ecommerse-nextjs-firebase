type Products = Product[];

type Product = {
  category: string;
  description: string;
  id: number;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
};

type User = {
  email: string;
  balance: number;
  orders: {
    totalSum: number;
    products: {
      [name]: string;
    };
  }[];
  transactions: {
    type: "withdraw" | "deposit";
    date: string;
    amount: number;
  };
  cart: object;
  isAdmin: boolean;
};

type PromoCode = {
  [key: string]: number;
};

type PromoCodes = PromoCode[];

type GetPromoCodes = () => Promise<PromoCodes>;

type Cart = [
  {
    amount: number;
    cartItems: Products;
  }
];
