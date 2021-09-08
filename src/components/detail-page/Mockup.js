import React from 'react';
import { Card, CardMedia } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    video: {
        objectFit: 'cover'
    }
}))

function Mockup(props) {
    
    const project = props.project;
    const classes = useStyles();
    return(
        <div style={{gridArea: 'big1', margin: '1.5%'}}>
            <Card>
            <CardMedia
                component="video"
                alt={ project.mockup }
                src={ "/portfolio/assets/project-media/" + project.mockup }
                title={ project.mockup }
                controls={true}
                poster={"/portfolio/assets/project-media/" + project.mockupVorschau}
                className={classes.video}
                />
            </Card>
            
        </div>
    )
}

export default Mockup;