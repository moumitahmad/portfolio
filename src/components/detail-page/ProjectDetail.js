import React from 'react';

import { Container, Typography, Button } from '@material-ui/core';
import { motion } from 'framer-motion';


import '../../style/App.css';
import projects from '../../data/Projects';
import Navbar from '../Navbar';
import Footer from '../ContactFooter';

function PresentDetail({ match }) {
    const project = projects[match.params.id];
    let menuItems = [
        {
            title: "Kontakt",
            path: "contact-footer"
        }
    ]

    if(project.hasGallery || project.mockup !== "") {
        menuItems.push(
            {
                title: "Prozess", path: "gallery"
            }
        )
    }
    if(project.myWork !== "") {
        menuItems.push(
            {
                title: "mein Anteil", path: "my-work"
            }
        )
    }

    
    return(
        <motion.div initial={{ opacity:0 }} animate={{opacity:1, duration:3 }} exit={{ opacity:0, duration:3 }}>
            <Navbar projectTitle={project.title} menuItems={menuItems} maxPixel={0}></Navbar>
            
            <div className="main-content">
                <Container maxWidth="md">
                    <br />
                    <br />
                    <br />
                    <br />
                    {project.about.map((item, idx) => (
                        <div key={idx}>
                            <Typography varient="body1" align="justify">{ item }</Typography>
                        </div>
                    ))}
                    
                    <ul className="project-links">
                        <li>
                            { project.path === ""
                            ? null
                            : <Button className="link-buttons" variant="contained" color="primary" target="_blank" rel="noopener noreferrer" href={ project.path }>zum Source Code</Button>
                            }
                        </li>
                        <li>
                            { project.docu === ""
                            ? null
                            : <Button className="link-buttons" variant="contained" color="secondary" target="_blank" rel="noopener noreferrer" href={ "/assets/project-media/dokus/" + project.doku }>zur Dokumentation</Button>
                            }
                        </li>
                        <li>
                            { project.id !== 3
                            ? null
                            : <Button className="link-buttons" variant="contained" color="secondary" target="_blank" rel="noopener noreferrer" href={ "/assets/project-media/dokus/" + project.doku2 }>zur HoloCubes Dokumentation</Button>
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