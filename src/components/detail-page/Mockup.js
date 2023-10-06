import React from 'react';
import { Card, CardMedia } from '@mui/material';

const classes = {
    video: {
        objectFit: 'cover'
    }
}

function Mockup(props) {
    
    const project = props.project;
    return(
        <div style={{gridArea: 'big1', margin: '1.5%'}}>
            <Card>
            <CardMedia
                component="video"
                alt={ project.mockup }
                src={ "/portfolio/project-media/" + project.mockup }
                title={ project.mockup }
                controls={true}
                poster={"/portfolio/project-media/" + project.mockupVorschau}
                sx={classes.video}
                />
            </Card>
            
        </div>
    )
}

export default Mockup;