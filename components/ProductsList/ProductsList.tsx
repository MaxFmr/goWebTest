import Product from '../../dataTypes/product';
import StyledProductsList from './ProductsList.style';
import { useContext, useState } from 'react';
import Context from '../../context/context';
import ProductItem from '../ProductItem/ProductItem';
import { RxTriangleDown } from 'react-icons/rx';
import CategoryFilter from '../CategoryFilter/CategoryFilter';

const ProductsList = (): JSX.Element => {
  const value = useContext(Context);
  const [displayCategoriesFilter, setDisplayCategoriesFilter] = useState(false);

  const products = value?.productsList;
  const selectedCategory = value?.category;

  return (
    <>
      <StyledProductsList>
        <h1>Products management</h1>
        <div className='column'>
          <div className='name'>
            <span>Product name</span>
          </div>
          <div
            className='category'
            onClick={() =>
              setDisplayCategoriesFilter(!displayCategoriesFilter)
            }>
            <span>Category</span>
            <RxTriangleDown size={17} />
            {displayCategoriesFilter && <CategoryFilter />}
          </div>

          <div className='price'>
            <span>Price</span>
          </div>
          <div className='vat'>
            <span>Price </span>
            <span className='including'>(including VAT)</span>
          </div>
        </div>
        {!products.length && <span>Loading...</span>}
        {products &&
          products.map((product: Product) => {
            if (product.category === selectedCategory) {
              return <ProductItem product={product} key={product.id} />;
            }
          })}
        {selectedCategory === undefined &&
          products.map((product: Product) => {
            return <ProductItem product={product} key={product.id} />;
          })}
      </StyledProductsList>
    </>
  );
};
export default ProductsList;
