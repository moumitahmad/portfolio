import React from 'react';
import { useParams } from 'react-router-dom';

import { Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';

import '../../style/App.css';
import projects from '../../data/Projects';
import Navbar from '../Navbar';
import ProjectDescription from './ProjectDescription';
import ProjectGallery from './ProjectGallery';
import Footer from '../ContactFooter';
import MyWorkSection from './MyWorkSection';
import Mockup from './Mockup';


const classes = {
    demoButton: {
        color: "black",
        backgroundColor: "#8bc34a",
        "&:hover": {
          backgroundColor: "#7cb342",
          "@media (hover: none)": {
            backgroundColor: "#8bc34a"
          }
        }
    },
  }


function PresentDetail({ match }) {
    let { id } = useParams();
    const project = projects[id];
    console.log(project);
    let menuItems = [
        {
            title: "Infos",
            path: "description"
        }
    ]

    if(project.hasGallery || project.mockup !== "") {
        menuItems.push(
            {
                title: "Prozess", 
                path: "gallery"
            }
        )
    }
    if(project.myWork !== "") {
        menuItems.push(
            {
                title: "mein Anteil", 
                path: "my-work"
            }
        )
    }

    menuItems.push(
        {
            title: "Kontakt", 
            path: "contact-footer"
        }
    )
    
    return(
        <motion.div initial={{ opacity:0 }} animate={{opacity:1, duration:3 }} exit={{ opacity:0, duration:3 }}>
        <br/>
        <br/>
        <br/>
            <Navbar projectTitle={id.title} menuItems={menuItems} maxPixel={0}></Navbar>
            
            <div className="main-content">
                <Container maxWidth="md">
                    <br />
                    <ProjectDescription project={ project }></ProjectDescription>
                    <br/>
                    <br/>
                    {project.about.map((item, idx) => (
                        <div key={idx}>
                            <Typography varient="body1" align="justify">{ item }</Typography>
                        </div>
                    ))}
                    
                    { project.hasGallery 
                    ? <ProjectGallery project={ project }></ProjectGallery>
                    : null }
                    { project.mockup === ""
                    ? null
                    : <Mockup project={ project }></Mockup> }
                    { project.myWork.length === 0
                    ? null
                    : <MyWorkSection project={ project }></MyWorkSection> }
                    <ul className="project-links">
                        <li>
                            { project.demo == null
                            ? null
                            : <Button sx={classes.demoButton} variant="contained" color="success" target="_blank" rel="noopener noreferrer" href={ project.demo }>zur Demo</Button>
                            }
                        </li>
                        <li>
                            { project.path === ""
                            ? null
                            : <Button className="link-buttons" variant="contained" color="secondary" target="_blank" rel="noopener noreferrer" href={ project.path }>zum Source Code</Button>
                            }
                        </li>
                        <li>
                            { project.docu === ""
                            ? null
                            : <Button className="link-buttons" variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={ "/project-media/dokus/" + project.docu }>zur Dokumentation</Button> /* /portfolio/assets */
                            }
                        </li>
                        <li>
                            { project.docu2 == null
                            ? null
                            : <Button className="link-buttons" variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={ "/potfolio/assets/project-media/dokus/" + project.docu2 }>zur HoloCubes Dokumentation</Button>
                            }
                        </li>
                    </ul>
                </Container>
            </div>
            
            <Footer></Footer>
        </motion.div>
    )
}

export default PresentDetail;