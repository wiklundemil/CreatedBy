import React from 'react';
import { CatalogueObject } from '../CatalogueGrid/Models/gridModels.ts';

interface Props {
    project: CatalogueObject;
    onBack: () => void;
}

const ProjectDetails: React.FC<Props> = ({ project, onBack }) => {
    return (
        <div>
            <button onClick={onBack}>Back</button>
            <h2>{project.title}</h2>
            <p>PROJECT</p> {/* Placeholder for more project details */}
        </div>
    );
};

export default ProjectDetails;
