type Products = Product[];

type Product = {
  category: string;
  description: string;
  id: number;
  uid: string;
  image: string;
  price: number;
  rating: { rate: number; count: number };
  title: string;
  fetchData: () => void;
};

type User = {
  email: string;
  balance: number;
  orders:
    | {
        totalSum: number;
        products: {
          [name]: string;
        };
      }[]
    | [];
  messages:
    | {
        from: string;
        message: string;
        userId: string;
        transferId: string;
        amount: number;
        type: "deposit" | "withdrow";
      }[]
    | [];

  cart: object;
  isAdmin: boolean;
  uid: "string";
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
