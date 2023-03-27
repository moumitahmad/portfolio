import React from 'react';

import { Card, Grid, Typography, CardMedia, Paper, Avatar } from '@mui/material';
// import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import GroupsIcon from '@mui/icons-material/Group';
import TimerIcon from '@mui/icons-material/Timer';
import BuildIcon from '@mui/icons-material/Build';
import { green, pink, purple, blue } from '@mui/material/colors';

const classes = {
    paper: {
      maxWidth: 400,
      marginTop: 1,
      marginBottom: 1,
      padding: 2,
    },
    paper1: {
      maxWidth: 400,
      margin: 0,
      padding: 2,
    },
    green: {
        color: '#fff',
        backgroundColor: green[500],
    },
    purple: {
        color: '#fff',
        backgroundColor: purple[500],
    },
    pink: {
        color: '#fff',
        backgroundColor: pink[500],
    },
    blue: {
        color: '#fff',
        backgroundColor: blue[500],
    }
  }

function ProjectDescription(props) {
    const project = props.project;

    return(
        <div id="description">
           <h1 className="section-title" id="description">Projekt: <strong>{ project.title }</strong></h1>
           <Grid container spacing={5}> 
                <Grid item xs={12} md={6}>
                    <div className="about-image">
                        <Card>
                        <CardMedia
                        component="img"
                        alt={ project.image }
                        height="320"
                        src={"/project-media/" + project.image} // /portfolio/assets
                        title={ project.title + "_preview" }
                        />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper sx={classes.paper1}>
                        <Grid container wrap="nowrap" spacing={2}  alignItems="center">
                            <Grid item>
                            <Avatar sx={classes.green}><DescriptionIcon /></Avatar>
                            </Grid>
                            <Grid item xs className="align-center-vertical">
                                <Typography variant="body1" component="h3">{ project.description }</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper sx={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar sx={classes.blue}><GroupsIcon /></Avatar>
                            </Grid>
                            <Grid item xs className="align-center-vertical">
                                <Typography variant="body1" component="h3">{ project.team }</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper sx={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar sx={classes.pink}><TimerIcon /></Avatar>
                            </Grid>
                            <Grid item xs className="align-center-vertical">
                                <Typography variant="body1" component="h3">{ project.duration } ({ project.time })</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper sx={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar sx={classes.purple}><BuildIcon /></Avatar>
                            </Grid>
                            <Grid item xs className="align-center-vertical">
                                <Typography variant="body1" component="h3">
                                    |&nbsp; 
                                    {project.technologies.map((tech, idx) => (
                                        tech + " | "
                                    ))}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProjectDescription;