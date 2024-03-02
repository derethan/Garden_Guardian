import Logo from '../header/logo';
import SiteTitle from '../header/siteTitle';
import Slogan from '../header/slogan';

//import location
import { useLocation } from 'react-router-dom';



function Header() {
    const location = useLocation();

    return (
        <>
        {['/', '/register'].includes(location.pathname) && (
        <div className='mainHeader'>
            <Logo />
            <SiteTitle />
            <Slogan />
        </div>
        )}
        </>
    );
}

export default Header;
