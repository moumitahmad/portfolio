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
                src={ "/project-media/" + project.mockup } // /portfolio/assets
                title={ project.mockup }
                controls={true}
                poster={"/project-media/" + project.mockupVorschau} // /portfolio/assets
                sx={classes.video}
                />
            </Card>
            
        </div>
    )
}

export default Mockup;