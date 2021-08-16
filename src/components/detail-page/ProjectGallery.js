import React, { useState } from 'react';

import '../../style/App.css';
import imageGallery from '../../data/ImageGallery';
import ImageCard from './ImageCard';
import FullScreenImage from './FullScreenImage';


function ProjectGallery(props) {
    const [displayImg, setDisplayImg] = useState(0);
    const [openModal, setOpenModal] = React.useState(false);
    const project = props.project;
    const imagesFromProject = imageGallery.filter(image => image.projectId === project.id);
    const firstImageId = imagesFromProject[0].id;

    function handleOpen(image) {
        setDisplayImg(image.id - firstImageId);
        setOpenModal(true);
    }

    function handleClose() {
        setOpenModal(false);
    }

    function incrementDisplayImg() {
        const newDisplayImg = displayImg + 1;
        if(newDisplayImg < imagesFromProject.length) {
            setDisplayImg(newDisplayImg);
        } else {
            setDisplayImg(0);
        }
    }

    function decrementDisplayImg() {
        const newDisplayImg = displayImg - 1;
        if(newDisplayImg !== -1) {
            setDisplayImg(newDisplayImg);
        } else {
            setDisplayImg(imagesFromProject.length-1);
        }
    }

    return(
        <div>
            <h1 className="section-title" id="gallery">Prozess</h1>
            <div className="grid-container">
                {imagesFromProject.map((image, idx) => (
                    <div className="grid-item" key={idx} onClick={ () => handleOpen(image) }>
                        <ImageCard image={ image }></ImageCard>
                    </div>
                ))}
                <FullScreenImage image={ imagesFromProject[displayImg] } open={openModal} closeFunction={ handleClose } backFunction={ decrementDisplayImg } forwardFunction={ incrementDisplayImg }></FullScreenImage>
            </div>
        </div>
    )
}

export default ProjectGallery;