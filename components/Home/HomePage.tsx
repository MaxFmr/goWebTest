import StyledHomePAge from './HomePage.style';
import { RiMenuUnfoldFill } from 'react-icons/ri';

import Menu from '../Menu/Menu';
import ProductsList from '../ProductsList/ProductsList';
import { useState } from 'react';
import SlideMenu from '../SlideMenu/SlideMenu';

const HomePage = (): JSX.Element => {
  const [displayMenu, setDisplayMenu] = useState(false);
  return (
    <StyledHomePAge>
      <div className='menuIcon' onClick={() => setDisplayMenu(!displayMenu)}>
        <RiMenuUnfoldFill size={40} color='#564AFF' />
      </div>
      {displayMenu && (
        <SlideMenu displayMenu={displayMenu} setDisplayMenu={setDisplayMenu} />
      )}
      <Menu />

      <ProductsList />
    </StyledHomePAge>
  );
};

export default HomePage;
