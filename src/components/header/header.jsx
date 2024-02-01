import Logo from '../header/logo';
import SiteTitle from '../header/siteTitle';
import Slogan from '../header/slogan';

//Css
import '../styles/header.css';


function Header() {

    return (
        <div className='mainHeader'>
            <Logo />
            <SiteTitle />
            <Slogan />
        </div>
    );
}

export default Header;
