import StyledSlideMenu from './SlideMenu.style';
import Image from 'next/image';
import Link from 'next/link';
import { BsFillCircleFill } from 'react-icons/bs';
import { RiMenuFoldFill } from 'react-icons/ri';
import { Dispatch, SetStateAction } from 'react';

type slideMenuProps = {
  displayMenu: boolean;
  setDisplayMenu: Dispatch<SetStateAction<boolean>>;
};
const SlideMenu = ({
  displayMenu,
  setDisplayMenu,
}: slideMenuProps): JSX.Element => {
  return (
    <StyledSlideMenu>
      <div className='menu'>
        {displayMenu && (
          <div className='closeIcon' onClick={() => setDisplayMenu(false)}>
            <RiMenuFoldFill size={40} color='#564AFF' />
          </div>
        )}
        <div className='logo'>
          <Image src={'/Logo.svg'} width={120} height={40} alt='logo' />
        </div>
        <div className='nav'>
          <span>Dashboard</span>
          <nav>
            <ul>
              <li>
                <span className='circle'>
                  <BsFillCircleFill size={10} />
                </span>
                <Link href={'/'}> Products management</Link>
              </li>
              <li>
                <a href='#'> Employee management</a>
              </li>
            </ul>
          </nav>
          <div className='logout'>
            <div className='bar'></div>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </StyledSlideMenu>
  );
};
export default SlideMenu;
