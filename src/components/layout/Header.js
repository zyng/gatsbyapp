import React from 'react';
import headerIMG from '../../images/header1.jpg';

const Header = ({ location }) => {

    let pageName = '';
    switch (location.pathname) {
        case '/':
            pageName = "home";
            break;
        case '/products':
            pageName = "products";
            break;
        case '/about':
            pageName = "about us";
            break;
        case '/contact':
            pageName = "contact";
            break;
        default:
            pageName = "404 Error"
    }

    return (
        <div className="page-header">
            <img src={headerIMG} alt="page main photo" />
            <p>{pageName}</p>
        </div>
    );
}

export default Header;