import '../style/App.css';

import { Avatar, Grid, Box, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import handshake from '../img/handshake.gif';

const useStyles = makeStyles((theme) => ({
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20)
    }
}));  



function ContactFooter() {

    const classes = useStyles();
    const contactItems = [
        {
            title: "EMAIL",
            path: "mailto: moumita.ahmad@gmail.com"
        },
        {
            title: "GITHUB",
            path: "https://github.com/moumitahmad"
        },
        {
            title: "LINKEDIN",
            path: "https://de.linkedin.com/in/moumita-ahmad-279b2a1b4"
        }
    ]


    return(
        <div className="footer" id="contact-footer">
            <Box className="align-center">
                <Avatar alt="Handshake-Gif" src={ handshake } className={classes.large} />
            </Box>
            <br />
            <br />
            <Grid container spacing={3} direction="row" justify="space-evenly" alignItems="center">
                {contactItems.map((item, idx) => (
                    <Grid key={idx} item xs={12} sm={3} md={1} className="grid-item-center">
                        <Button target="_blank" rel="noopener noreferrer" href={item.path} className="contact-button">{item.title}</Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default ContactFooter;