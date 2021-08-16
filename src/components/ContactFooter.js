import '../style/App.css';

import { Grid, Box, Button, Typography, Container } from '@material-ui/core';



function ContactFooter() {

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
            <div className="main-content">
            <Container max-width="md">
           <Grid container alignItems="flex-start">
                <Grid item xs={12} md={5}>
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                        Hier bin ich zu erreichen!
                    </Typography>
                    <Grid container direction="column" justify="flex-start" alignItems="flex-start">
                    {contactItems.map((item, idx) => (
                        <Grid item className="contact-item">
                            <Button target="_blank" rel="noopener noreferrer" href={item.path} className="contact-button">{item.title}</Button>        
                        </Grid>
                    ))}
                    </Grid>
                </Grid>
                <Grid item xs={0} md={3}>
                    </Grid>
                <Grid item xs={12} md={4}>
                    <Box  className="align-right">
                    <Typography gutterBottom variant="h5" component="h2" color="primary">
                        Downloads
                    </Typography>
                    <Button className="contact-button">Lebenslauf</Button>
                    </Box>
                </Grid>
            </Grid>
            <br/>
            <br/>
            <Typography gutterBottom variant="subtitle1" className="oswald align-center">
                &copy; 2021 Moumita Ahmad
            </Typography>
            </Container>
            </div>
        </div>
    )
}

export default ContactFooter;