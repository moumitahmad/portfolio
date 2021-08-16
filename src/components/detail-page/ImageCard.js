import React from 'react';
import { Card, CardHeader, CardMedia } from '@material-ui/core';
import { motion } from 'framer-motion';


function ImageCard(props) {

    const image = props.image;

    return(
        <motion.div 
        whileHover={{
            scale: [1, 1.04, 1.03],
            position: "relative",
            zIndex: 2,
            transition: {
                duration: .3
            } 
        }}>
            <Card className="image-card">
                <CardMedia
                component="img"
                alt={ image.name }
                height="150"
                src={"/portfolio/assets/project-media/" + image.name}
                title={image.name}
                />
                <CardHeader
                subheader={ image.description } className="card-content"
                />
            </Card>
        </motion.div>
    )
}

export default ImageCard;