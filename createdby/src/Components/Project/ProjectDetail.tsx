import React from 'react';
import { CatalogueObject } from '../CatalogueGrid/Models/gridModels.ts';
import { Box, Button, Typography, Paper } from '@mui/material';
import './ProjectDetail.css'; 

interface Props {
    project: CatalogueObject;
    onBack: () => void;
}

const ProjectDetails: React.FC<Props> = ({ project, onBack }) => {
    return (
        <Paper className="project-details" elevation={3}>
            <Button className="back-button" variant="contained" onClick={onBack}>
                Back
            </Button>
            <Box className="project-content">
                <Typography variant="h4" component="h2" className="rubric">
                    {project.title}
                </Typography>
                <Typography variant="body1" className="description">
                    This is a description of the project.
                </Typography>
                <Box className="main-content-box">
                    <Typography variant="h5">
                        MAIN CONTENT
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
};

export default ProjectDetails;
