import '../styles/globals.css';
import { Roboto } from '@next/font/google';
import type { AppProps } from 'next/app';
import { useState, useEffect } from 'react';
import Context from '../context/context';
import axios from 'axios';
import Product from '../dataTypes/product';

//Google Font init
const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  //  Data context ---------------------------------------------------

  const [productsList, setProductsList] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product>();
  const [categories, setCategories] = useState<string[]>();
  const [category, setCategory] = useState<string>();

  //Data init / get list of all products

  const fetchProducts = async () => {
    const response = await axios.get(
      process.env.NEXT_PUBLIC_FAKESTORE_URL as string
    );

    setProductsList(response.data);
  };

  //Get all categories

  const getCategories = async () => {
    const response = await axios.get(
      (process.env.NEXT_PUBLIC_FAKESTORE_URL + 'categories') as string
    );
    setCategories(response.data);
  };

  //  Actions ---------------------------------------------------

  //App Init
  useEffect(() => {
    fetchProducts();
    getCategories();
  }, []);

  //Product update
  const updateProductPrice = async (product: Product, price: number) => {
    const list = [...productsList];
    const productToUpdate = list[product.id - 1];
    productToUpdate.price = price;
    setProductsList(list);
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_FAKESTORE_URL}${product.id}`,
      {
        product,
      }
    );
    console.log(response);
  };

  return (
    <Context.Provider
      value={{
        productsList,
        selectedProduct,
        setSelectedProduct,
        updateProductPrice,
        categories,
        setCategory,
        category,
        fetchProducts,
      }}>
      <div className={roboto.className}>
        <Component {...pageProps} />
      </div>
    </Context.Provider>
  );
}
