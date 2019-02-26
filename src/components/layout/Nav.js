import React, { Component } from 'react';
import { Link } from "gatsby";


class Nav extends Component {

    handleClick = (e) => {
        e.target.parentNode.classList.toggle('active');
    }
    render() {
        return (
            <header className="page-nav">
                <Link to='/' className="logo">logo</Link>
                <nav>
                    <button className="hamburger" onClick={this.handleClick}></button>
                    <ul>
                        <li><Link to='/' activeClassName="active">home</Link></li>
                        <li><Link to='/products' activeClassName="active">products</Link></li>
                        <li><Link to='/about' activeClassName="active">about</Link></li>
                        <li><Link to='/contact' activeClassName="active">contact</Link></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Nav;
