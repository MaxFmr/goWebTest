import Product from '../../dataTypes/product';
import { useContext } from 'react';
import Context from '../../context/context';
import { useRouter } from 'next/router';
import StyledProductItem from './ProductItem.style';
import includeVat from '../../utils/vat';

type itemProps = { product: Product };

const ProductItem = ({ product }: itemProps): JSX.Element => {
  const router = useRouter();
  //context

  const value = useContext(Context);
  const setSelectedProduct = value.setSelectedProduct;
  const selectedProduct = value.selectedProduct;

  //
  const selectProduct = (product: Product) => {
    setSelectedProduct(product);
    router.push(`/product/${product.id}`);
  };

  return (
    <StyledProductItem
      category={product.category}
      productId={product.id}
      selectedProductId={selectedProduct?.id}>
      <div className='item' onClick={() => selectProduct(product)}>
        <div className='name'>
          <span>{product.title}</span>
        </div>
        <div className='category'>
          <div>
            <span>{product.category}</span>
          </div>
        </div>
        <div className='price'>
          <div>
            <span>{product.price}€</span>
          </div>
        </div>
        <div className='vat'>
          <span>{includeVat(product.price)}€</span>
        </div>
      </div>
    </StyledProductItem>
  );
};
export default ProductItem;
