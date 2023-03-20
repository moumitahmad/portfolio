import React, { useState, useEffect } from 'react';

import '../style/App.css';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import logoSVG from '../assets/logoBlau.png'

import { AppBar, Toolbar, Box, Link, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link as RouterLink } from 'react-router-dom';



function Navbar(props) {

    const MAX_MOBILE_WIDTH = 600;
    const BACKGROUND_CHANGE_POINT = props.maxPixel;

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(() => {
        if(window.innerWidth <= MAX_MOBILE_WIDTH) {
            return true;
        } else {
            return false;
        }
    });

    const [navbar, setNavbar] = useState(false);

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
        if(window.innerWidth <= MAX_MOBILE_WIDTH) {
            setMobile(true);
        } else {
            setMobile(false);
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);
    }, [])
    
    const changeBackground = () => {
        if(window.scrollY >= BACKGROUND_CHANGE_POINT) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }
    
    const useStyles = makeStyles((theme) => ({
        homeButton: {
        marginRight: theme.spacing(2),
        },
        appBarTransparent: {
            opacity: 1
        },
        appBarSolid: {
            
        }
    }));
    const classes = useStyles();

    window.addEventListener('scroll', changeBackground);
    
    const menuItems = props.menuItems;
    const projectTitle = props.projectTitle;
    let hasProject = false;
    if(projectTitle != null) {
        hasProject = true;
    }
    

    return(
        <div className={classes.root}>
            <AppBar color="transparent" elevation={0} position="fixed" className={ navbar ? 'navbar active' : 'navbar' }>
                <Toolbar>
                    <Box className="nav-logo">
                        <Link to="/portfolio" component={RouterLink}>
                            <Icon fontSize="large">
                                <img src={logoSVG} height="100%" alt="logo"/>
                            </Icon>
                            {/* <Typography variant={navbar ? 'subtitle1' : 'h5'}>Moumita Ahmad</Typography> */}
                        </Link>
                    </Box>
                    {mobile 
                    ? <MobileNavbar menuItems={menuItems} hasProject={hasProject} />
                    : <DesktopNavbar menuItems={menuItems} />}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Navbar;