import { useRouter } from 'next/router';
import { useContext } from 'react';
import Context from '../../context/context';
import axios from 'axios';
import StyledError from './ErrorCase.style';

/**
 * This componant appeat when user make a refesh of the page with his browser
 *
 */

const ErrorCase = () => {
  const router = useRouter();
  const value = useContext(Context);
  const setSelectedProduct = value.setSelectedProduct;
  const id = router.query.id;

  const selectProductFromApi = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
    setSelectedProduct(response.data);
  };
  return (
    <StyledError>
      <div className='box'>
        <p>
          Cette application étant reliée à une API de test qui ne modifie pas
          les produits en base données, en effectuant un rafraîchissement de la
          page, vous perdez les modification effectuées.
        </p>
        <div className='buttons'>
          <button onClick={() => router.push('/')}>
            Retour à la liste des Produits
          </button>
          <button onClick={() => selectProductFromApi()}>
            Afficher le produit d’origine{' '}
          </button>
        </div>
      </div>
    </StyledError>
  );
};
export default ErrorCase;
