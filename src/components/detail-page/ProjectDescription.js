import React from 'react';

import { Card, Grid, Typography, CardMedia, Paper, Avatar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import DescriptionIcon from '@material-ui/icons/Description';
import GroupsIcon from '@material-ui/icons/Group';
import TimerIcon from '@material-ui/icons/Timer';
import BuildIcon from '@material-ui/icons/Build';
import { green, pink, purple, blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
    paper1: {
      maxWidth: 400,
      margin: `0px auto`,
      padding: theme.spacing(2),
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
    },
  }));

function ProjectDescription(props) {
    const project = props.project;
    const classes = useStyles();

    return(
        <div id="describtion">
           <h1 className="section-title" id="description">Projekt: <strong>{ project.title }</strong></h1>
           <Grid container justifyContent="flex-start" spacing={5}>
                <Grid item xs={12} md={6}>
                    <div className="about-image">
                        <Card>
                        <CardMedia
                        component="img"
                        alt={ project.image }
                        height="320"
                        src={"/portfolio/assets/project-media/" + project.image}
                        title={ project.title + "_preview" }
                        />
                        </Card>
                    </div>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper className={classes.paper1}>
                        <Grid container wrap="nowrap" spacing={2}  alignItems="center">
                            <Grid item>
                            <Avatar className={classes.green}><DescriptionIcon /></Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" component="h3">{ project.description }</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar className={classes.blue}><GroupsIcon /></Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" component="h3">{ project.team }</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar className={classes.pink}><TimerIcon /></Avatar>
                            </Grid>
                            <Grid item xs>
                                <Typography variant="body1" component="h3">{ project.duration } ({ project.time })</Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                    <Paper className={classes.paper}>
                        <Grid container wrap="nowrap" spacing={2}>
                            <Grid item>
                            <Avatar className={classes.purple}><BuildIcon /></Avatar>
                            </Grid>
                            <Grid item xs>
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