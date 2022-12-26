import Image from 'next/image';
import Context from '../../context/context';
import { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import StyledDetails from './Details.style';
import { FiArrowLeft } from 'react-icons/fi';
import includeVat from '../../utils/vat';

const Details = ({}) => {
  const router = useRouter();
  //context
  const value = useContext(Context);
  const selectedProduct = value?.selectedProduct;
  const updateProductPrice = value?.updateProductPrice;
  const selectedPrice = value?.selectedProduct?.price;

  const [price, setPrice] = useState<number | undefined>(selectedPrice);
  return (
    <StyledDetails
      category={selectedProduct?.category}
      price={price}
      selectedPrice={selectedPrice}>
      {selectedProduct && (
        <div>
          <div className='header'>
            <button className='backBtn' onClick={() => router.push('/')}>
              <FiArrowLeft size={45} color='#707070' />
            </button>
            <div className='title'>
              <h1>{selectedProduct.title}</h1>
            </div>
          </div>
          <div className='info'>
            <div className='view'>
              <Image
                src={selectedProduct.image}
                width={220}
                height={380}
                alt={selectedProduct.title}
                className='image'
              />
            </div>

            <div className='descPriceUpdate'>
              <div className='description'>
                <h2>Description</h2>
                <p>{selectedProduct.description}</p>
              </div>
              <div className='price'>
                <h2>Price</h2>
                <div className='priceTag'>
                  <div className='input'>
                    <input
                      type='text'
                      placeholder={JSON.stringify(price)}
                      onChange={(e) => setPrice(parseFloat(e.target.value))}
                    />
                    <span>€</span>
                  </div>
                  <span>
                    <strong> Price </strong>
                    (including VAT): {includeVat(selectedProduct.price)}€
                  </span>
                </div>
                <button
                  disabled={selectedPrice !== price ? false : true}
                  onClick={() => {
                    updateProductPrice(selectedProduct, price as number);
                    router.push('/');
                  }}>
                  Update product
                </button>
              </div>
              <div></div>
            </div>
            <div className='category'>
              <h2>Category</h2>
              <div>
                <span>{selectedProduct.category}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </StyledDetails>
  );
};
export default Details;
