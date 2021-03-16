import React from 'react';

import '../style/App.css';
import DesktopNavbar from './DesktopNavbar';


function Navbar(props) {
    const menuItems = props.menuItems;

    return(
        <div>
            <DesktopNavbar menuItems={menuItems}></DesktopNavbar>
        </div>
    )
}

export default Navbar;