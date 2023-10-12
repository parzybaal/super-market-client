interface Product {
  title: string;
  category: string[];
  price: number;
  discount: {
    text: string;
    color: string;
    value: number;
  };
  stock: string;
  description: string;
  offer_price: number;
  image: string;
  gallery: {
    template: string[];
  };
}

export default Product;
