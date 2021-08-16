import React from 'react';
import { Typography } from '@material-ui/core';

function MyWorkSection(props) {
    const project = props.project;

    return(
        <div id="my-work">
            <h1 className="section-title">Was hab ich gemacht?</h1>
            {project.myWork.map((item, idx) => (
                <div key={idx}>
                    <Typography varient="body1" align="justify">{ item }</Typography>
                </div>
            ))}
        </div>
    )
}

export default MyWorkSection;