import { Modal, Typography, IconButton } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';

function FullScreenImage(props) {
    const image = props.image;

    return(
        
        <Modal open={props.open} onClose={() => props.closeFunction()} className="modal-container">
            <>
                <IconButton color="primary" className="arrow-button prev" onClick={() => props.backFunction()}>
                    <ArrowBack />
                </IconButton>
                <IconButton color="primary" className="arrow-button next" onClick={() => props.forwardFunction()}>
                    <ArrowForward />
                </IconButton>
                <img className="fullscreen-img" src={"/portfolio/project-media/" + image.name} alt={image.name} width="75%" onClick={() => props.closeFunction()}/>
                <Typography className="white-text" variant="body1">{image.description}</Typography>
                <br></br>
            </>
        </Modal>
    )
}

export default FullScreenImage;