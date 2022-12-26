import { createContext, Dispatch, SetStateAction } from 'react';
import Product from '../dataTypes/product';

interface State {
  productsList: Product[];
  selectedProduct: Product | undefined;
  setSelectedProduct: Dispatch<SetStateAction<Product | undefined>>;
  setCategory: Dispatch<SetStateAction<string | undefined>>;
  updateProductPrice: (product: Product, price: number) => void;
  fetchProducts: () => void;
  category: string | undefined;

  categories: string[] | undefined;
}
const Context = createContext<State>({
  productsList: [],
  selectedProduct: {
    title: 'string',
    id: 0,
    price: 0,
    description: '',
    category: '',
    image: '',
    rating: { rate: 0, count: 0 },
  },
  setSelectedProduct: () => {},
  setCategory: () => {},
  updateProductPrice: () => {},
  fetchProducts: () => {},
  categories: [],
  category: '',
});
export default Context;
