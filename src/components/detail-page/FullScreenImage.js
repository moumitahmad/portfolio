import { Modal, Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core';
import { ArrowForward, ArrowBack } from '@material-ui/icons';

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
                <img className="fullscreen-img" src={"/portfolio/assets/project-media/" + image.name} alt={image.name} width="75%" onClick={() => props.closeFunction()}/>
                <Typography className="white-text" variant="body1">{image.description}</Typography>
                <br></br>
            </>
        </Modal>
    )
}

export default FullScreenImage;