import '../style/App.css';

import profilImg from '../img/profilPic.png';

import { Typography, Grid, Box } from '@material-ui/core';
import { motion } from 'framer-motion'; 


function BannerTitle() {

    return(
        <div id="hero">
            <Grid container spacing={3} direction="row" justify="center" alignItems="center" className="title">
                <Grid item xs={12} className="align-center">
                    <motion.div initial={{ y: 300, opacity:0, scale:0 }} animate={{ y: 0, scale:1, opacity:1, transition: {staggerChildren: 0.2}}}>
                        <Typography variant="h2" color="primary" className="gothic-solid">MOUMITA</Typography>
                    </motion.div>
                </Grid>
                <Grid item xs={12} className="align-center">
                    <motion.div initial={{ y: 300, opacity:0, scale:0 }} animate={{ y: 0, scale:1, opacity:1, transition: {duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9]} }}>
                        <Typography variant="h2" color="secondary" className="gothic-outline">AHMAD</Typography>
                    </motion.div>
                </Grid>
            </Grid>
        </div>
    )
}

function Hero() {

    return(
        <div className="hero">
            <Grid container justify="center" className="HeroContent" alignItems="center">
                <Box clone order={{ xs: 2, sm: 1}}>
                    <Grid item xs={12} sm={6}>
                        <img src={ profilImg } alt="me-img" width="100%" height="auto" className="heroImage" />
                    </Grid>
                </Box>
                <Box clone order={{ xs: 1, sm: 2}}>
                    <Grid item xs={12} sm={6}>
                        <BannerTitle></BannerTitle>
                    </Grid>
                </Box>
            </Grid>
        </div>
    )
}

export default Hero;