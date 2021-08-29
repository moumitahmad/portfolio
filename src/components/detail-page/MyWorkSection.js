import React from 'react';
import { Typography } from '@material-ui/core';

function MyWorkSection(props) {
    const project = props.project;

    return(
        <div id="my-work">
            <br/>
            <br/>
            <br/>
            {project.myWork.map((item, idx) => (
                <div key={idx}>
                    <Typography varient="body1" align="justify">{ item }</Typography>
                </div>
            ))}
        </div>
    )
}

export default MyWorkSection;