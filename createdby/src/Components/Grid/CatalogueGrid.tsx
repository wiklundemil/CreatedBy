import CatalogueItem from './CatalogueItem.tsx';
import { CatalogueObject } from './Models/gridModels.ts';
import { Grid } from '@mui/material';

interface Props {
    catalogueObjects: CatalogueObject[];
}

const CatalogueGrid: React.FC<Props> = ({
    catalogueObjects,
}) => {
    const objects = Array.from({ length: catalogueObjects.length }, (_, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <CatalogueItem title={catalogueObjects[index].title} />
        </Grid>
    ));

    return (
        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {objects}
        </Grid>
    );
};

export default CatalogueGrid;
