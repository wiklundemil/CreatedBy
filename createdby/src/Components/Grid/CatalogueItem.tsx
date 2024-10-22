import React from 'react';
import './CatalogueItem.css';

interface CatalogueItemProps {
    title: string;
    onClick: () => void;
}

const CatalogueItem: React.FC<CatalogueItemProps> = ({ title, onClick }) => {
    return (
        <div className="catalogue-item" onClick={onClick}>
            <p>{title}</p>
        </div>
    );
};

export default CatalogueItem;
