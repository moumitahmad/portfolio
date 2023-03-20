import React from 'react';
import { Grid, Typography, Card, CardMedia } from '@material-ui/core';

import meImg from '../assets/mePicColor.jpg';


function About() {

    return(
        <div>
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
                        Hier werden mehrere meiner verschiedenen Projekte präsentiert.<br />
                        Wenn Sie also gerne etwas mehr darüber erfahren wollen, welche Projekte ich in den letzten Jahren entwickelt habe und wie diese entstanden und verlaufen sind, sind Sie hier genau richtig! <br />
                        Momentan besuche ich das siebten Semester des internationalen Studiengangs Medieninformatik an der Hochschule Bremen. Viele dieser Projekte sind im Rahmen von Modulen an der Hochschule entstanden. <br /> Viel Spaß :)
                    </Typography>
                </Grid>
            </Grid>
        </div>
    )
}

export default About;