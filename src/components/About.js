import React, { useState } from 'react';
import { Container, Grid, Typography, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { motion } from "framer-motion";

import VisibilitySensor from 'react-visibility-sensor';

import meImg from '../img/profilfoto.jpg';


const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    },
}));  


function About() {
    // scroll animation with framer motion

    const [inView, setInView] = useState(false);

    function isInView() {
        setInView(true);
        console.log("IS IN VIEW")
    }
    
    const transition = {
        duration: 0.4,
        delay: 0.2,
        ease: "easeInOut"
    };

    const variants = {
        hidden: {
            y:200,
            scale: 1,
            opacity: 0,
            transition
        },
        show: {
            y:0,
            scale: 1,
            opacity: 1,
            transition
        }
    };

    // costum material ui styles
    const classes = useStyles();

    return(
        <VisibilitySensor onChange={isInView}>
        <motion.div initial="hidden" animate={inView ? "show" : "hidden"} exit="hidden" variants={variants} id="about" className="about-section">
            <h1 className="section-title">Willkommen auf meinem Portfolio!</h1>
            <Grid container alignItems="flex-start">
                <Grid item xs={12} md={3}>
                    <div className="align-center about-image">
                        <CardMedia
                        component="img"
                        alt={ "Profilbild" }
                        height="auto"
                        src={ meImg }
                        title={ "Profilbild" }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Container maxWidth="sm">
                        <Typography variant="body1" gutterBottom  align="justify">
                        Hier werden mehrere meiner verschiedenen Projekte präsentiert.<br />
                        Wenn Sie also gerne etwas mehr darüber erfahren wollen, welche Projekte ich in den letzten Jahren entwickelt habe und wie diese entstanden und verlaufen sind, sind Sie hier genau richtig! :) <br />
                        Ich studiere momentan Medieninformatik an der Hochschule Bremen und besuche dort das 7. Semester. Viele dieser Projekte sind im Rahmen von Modulen an der Hochschule entstanden. Viel Spaß!
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </motion.div>
        </VisibilitySensor>
    )
}

export default About;