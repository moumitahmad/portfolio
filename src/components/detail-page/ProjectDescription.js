import React from 'react';

import { Container, Grid, Typography, CardMedia } from '@material-ui/core';
import DescriptionIcon from '@material-ui/icons/Description';
import GroupsIcon from '@material-ui/icons/Group';
import TimerIcon from '@material-ui/icons/Timer';
import BuildIcon from '@material-ui/icons/Build';
import ProjectHero from './ProjectHero';

function ProjectDescription(props) {
    const project = props.project;

    return(
        <div id="describtion">
            <ProjectHero project={ project }></ProjectHero>
           <h1 className="section-title" id="description">{ project.title }</h1>
           <Grid container alignItems="flex-start">
                <Grid item xs={12} md={4}>
                    <div className="align-center about-image">
                        <CardMedia
                        component="img"
                        alt={ project.image }
                        height="240"
                        src={"/portfolio/assets/project-media/" + project.image}
                        title={ project.title + "_preview" }
                        />
                    </div>
                </Grid>
                <Grid item xs={12} md={7}>
                    <Container maxWidth="sm">
                        <Typography variant="body1" gutterBottom  align="justify" component="h2" className="icon-container">
                            <DescriptionIcon fontSize="medium" className="icon"/>
                            <span>{ project.description }</span> 
                            <br/>
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="justify" component="h2" className="icon-container">
                            <GroupsIcon fontSize="medium" className="icon"></GroupsIcon>
                            { project.team }<br/>
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="justify" component="h2" className="icon-container">
                            <TimerIcon fontSize="medium" className="icon"></TimerIcon>
                            { project.duration } ({ project.time })<br/>
                        </Typography>
                        <Typography variant="body1" gutterBottom  align="justify" component="h2" className="icon-container">
                            <BuildIcon fontSize="medium" className="icon"></BuildIcon>
                            {project.technologies.map((tech, idx) => (
                                tech + " "
                            ))}
                        </Typography>
                    </Container>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectDescription;