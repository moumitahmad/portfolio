import React from 'react';
import { Typography, Box } from '@mui/material';
import { Link as Scroller } from 'react-scroll';

function DesktopNavbar(props) {
    const menuItems = props.menuItems;
    return(
        <>
            {menuItems.map((item, idx) => (
                <Box className="menu-item" key={idx}>
                    <Scroller className="nav-item" activeClass="active" spy={true} smooth={true} duration={500} to={item.path}>
                        <Typography varient="h5">{item.title}</Typography>
                    </Scroller>
                </Box>
            ))}
        </>
    )
}

export default DesktopNavbar;