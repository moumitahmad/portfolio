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
    console.log(project)

    return(
        <div style={{gridArea: 'big1', margin: '1.5%'}}>
            <Card>
                <CardMedia
                component="video"
                alt={ project.mockup }
                src={ "/assets/project-media/" + project.mockup }
                title={ project.mockup }
                controls={true}
                poster={"/assets/project-media/" + project.mockupVorschau}
                className={classes.video}
                />
            </Card>
        </div>
    )
}

export default Mockup;