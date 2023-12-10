import React from 'react';
import Logo from './logo.js';
import SiteTitle from './siteTitle.js';

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
