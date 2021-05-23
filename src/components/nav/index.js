import React from 'react';
import { Link } from 'gatsby';
import { window } from 'browser-monads';
// import logo from '../../images/'
import './nav.css';

const Nav = () => (
    <nav>
        <div className="nav__items">
            <a className="nav_logo"><span>ROMAN</span><span>APF</span></a>
            <div>
                <Link className={window.location.href.indexOf('works') > 0 || window.location.href.indexOf('category')  ? 'nav_item--link active' : 'nav_item--link'} to='/works'>Works</Link>
                <Link className={window.location.href.indexOf('Stories') > 0 ? 'nav_item--link active' : 'nav_item--link'} to='/contact' to='/stories'>Stories</Link>
                <Link className={window.location.href.indexOf('About') > 0 ? 'nav_item--link active' : 'nav_item--link'} to='/contact' to='/about'>About</Link>
                <Link className={window.location.href.indexOf('contact') > 0 ? 'nav_item--link active' : 'nav_item--link'} to='/contact' to='/contact'>Contact</Link>
            </div>
        </div>
    </nav>
)


export default Nav