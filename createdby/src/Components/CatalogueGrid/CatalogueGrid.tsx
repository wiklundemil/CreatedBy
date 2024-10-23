import CatalogueItem from './CatalogueItem.tsx';
import { CatalogueObject } from './Models/gridModels.ts';
import { Grid } from '@mui/material';
import Banner from '../Banner/Banner.tsx';

interface Props {
    catalogueObjects: CatalogueObject[];
    onItemClick: (item: CatalogueObject) => void;

}

const CatalogueGrid: React.FC<Props> = ({
    catalogueObjects, onItemClick,
}) => {
    const objects = catalogueObjects.map((item, index) => (
        <Grid item xs={2} sm={4} md={4} key={index}>
            <CatalogueItem
                title={item.title}
                onClick={() => onItemClick(item)} // Trigger the callback when clicked
            />
        </Grid>
    ));

    return (

        <Grid container spacing={{ xs: 1, md: 2 }} columns={{ xs: 4, sm: 8, md: 12 }}>
           <Grid item xs={12} style={{ marginBottom: '20px'}}>
                <Banner></Banner>
            </Grid>
            {objects}
        </Grid>
    );
};

export default CatalogueGrid;
