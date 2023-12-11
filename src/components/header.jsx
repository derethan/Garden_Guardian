import Logo from './logo';
import SiteTitle from './siteTitle';

//Css
import './styles/header.css';


function Header() {

    return (
        <div className='mainHeader'>
            <Logo />
            <SiteTitle />
        </div>
    );
};

export default Header;
