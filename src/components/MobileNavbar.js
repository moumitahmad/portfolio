import React, { useState, useEffect } from 'react';
import { Link as Scroller } from 'react-scroll';

import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { List, ListItem, Link, Divider, Drawer } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(0),
    },
  }));

function MobileNavbar(props) {
    const menuItems = props.menuItems;
    const hasProject = props.hasProject;
    const classes = useStyles();

    const [menuState, setMenuState] = useState(() => {
        return false;
    });

    useEffect(() => {

    }, [menuState])

    const toggleDrawer = () => {
        console.log("toggle drawer to: open = " + !menuState);
        setMenuState(!menuState);
    };


    return(
        <>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={() => toggleDrawer()}>
                <MenuIcon />
            </IconButton>
                <Drawer open={menuState} anchor="top" variant="temporary">
                    <List>
                        <ListItem onClick={() => {toggleDrawer()}}>
                            {hasProject === true
                            ? <Link to="/" component={RouterLink}>Startseite</Link>
                            : <Scroller className="nav-item" activeClass="active" smooth={true} duration={500} to={"hero"} onClick={() => {toggleDrawer()}}>MA</Scroller>}
                        </ListItem>
                        {menuItems.map((item, idx) => (
                            <div key={idx}>
                                <Divider />
                                <Scroller className="nav-item" activeClass="active" smooth={true} duration={500} to={item.path} onClick={() => {toggleDrawer()}}>
                                    <ListItem key={idx}>
                                        {item.title}
                                    </ListItem>
                                </Scroller>
                            </div>
                        ))}
                    </List>
                </Drawer> 
        </>
    )
}

export default MobileNavbar;