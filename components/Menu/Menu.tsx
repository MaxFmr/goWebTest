import StyledMenu from './Menu.style';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { BsFillCircleFill } from 'react-icons/bs';
import Link from 'next/link';

const Menu = (): JSX.Element => {
  const router = useRouter();
  const path = router.pathname;
  return (
    <StyledMenu>
      <div className='logo'>
        <Image src={'/Logo.svg'} width={174} height={61} alt='logo' />
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
        <div className='bar'></div>
        <button>Logout</button>
      </div>
    </StyledMenu>
  );
};
export default Menu;
