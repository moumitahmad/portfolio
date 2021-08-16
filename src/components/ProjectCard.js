import React from 'react';
import '.././style/App.css';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, CardMedia, CardActionArea, Link, Typography } from '@material-ui/core';
import { motion } from 'framer-motion';


function ProjectCard(props) {
  const project = props.project;

  return (
    <Link underline='none' component={RouterLink} to={'/portfolio/project/' + project.id}>
      <motion.div 
        whileHover={{
          scale: [1, 1.04, 1.03],
          position: "relative",
          zIndex: 2,
          transition: {
            duration: .3
          }
        }}>
        <Card>
          <CardActionArea>
            <motion.div whileHover={{ scale: [1, 1.05, 1.03], transition: {duration: .2}}}>
              <CardMedia
                component="img"
                alt={ project.image }
                height="240"
                src={"/portfolio/assets/project-media/" + project.image}
                title={ project.title + "_preview" }
              />
            </motion.div>
            <CardContent className="align-left card-content">
              <Typography gutterBottom variant="h5" component="h2">
                {project.title}
              </Typography>
              <ul>
                {project.technologies.map((lesson, idx) => (
                  <li key={ idx } className="project-desciption">
                    <Typography variant="body1" color="textSecondary">
                        {lesson}
                    </Typography>
                  </li>
                ))}
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
      </motion.div>
    </Link>
  );
}

export default ProjectCard;