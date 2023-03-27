import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@mui/material';

import meImg from '../assets/mePicColor.jpg';


function About() {

    return(
        <div id="about">
            <br/>
            <br/>
            <br/>
            <br/>
            <h1 className="section-title">Willkommen auf meinem Portfolio!</h1>
            <Grid container alignItems="flex-start" spacing={5}>
                <Grid item xs={12} sm={4}>
                    <div className="align-center about-image">
                        <Card>
                            <CardMedia
                            component="img"
                            alt={ "Profilbild" }
                            height="auto"
                            src={ meImg }
                            title={ "Profilbild" }
                            />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Typography variant="body1" gutterBottom  align="justify">
                        Hier werden mehrere meiner verschiedenen Projekte präsentiert. Sie alle sind in Rahmen von Modulen an der Hochschule Bremen entstanden.<br />
                        Wenn Sie also gerne etwas mehr darüber erfahren wollen, welche Projekte ich entwickelt habe und wie diese entstanden und verlaufen sind, sind Sie hier genau richtig! <br />
                        Durch ein paar Bilder und Texte kann sich hier einen Eindruck verschaffen werden.
                        Viel Spaß :)
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;