import StyledProductDetails from './ProductDetails.style';
import Menu from '../Menu/Menu';
import Details from './Details';
import { useState } from 'react';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import SlideMenu from '../SlideMenu/SlideMenu';

const ProductDetails = (): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <>
      <StyledProductDetails>
        <div className='menuIcon' onClick={() => setDisplayMenu(!displayMenu)}>
          <RiMenuUnfoldFill size={40} color='#564AFF' />
        </div>
        {displayMenu && (
          <SlideMenu
            displayMenu={displayMenu}
            setDisplayMenu={setDisplayMenu}
          />
        )}
        <Menu />
        <Details />
      </StyledProductDetails>
    </>
  );
};
export default ProductDetails;
