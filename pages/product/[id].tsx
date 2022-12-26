import { useContext } from 'react';
import Context from '../../context/context';
import { useBeforeunload } from 'react-beforeunload';
import ProductDetails from '../../components/ProductDetails/ProductDetails';
import ErrorCase from '../../components/ErrorCase/ErroCase';

const ProductDetailsPage = (): JSX.Element => {
  //context
  const value = useContext(Context);
  const selectedProduct = value?.selectedProduct;

  useBeforeunload(() => '');

  return (
    <>
      {!selectedProduct ? (
        <ErrorCase />
      ) : (
        <>
          <ProductDetails />
        </>
      )}
    </>
  );
};

export default ProductDetailsPage;
