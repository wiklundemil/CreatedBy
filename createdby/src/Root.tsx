import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { CatalogueObject } from './Models/gridModels.ts';

import CatalogueGrid from './Components/Grid/CatalogueGrid.tsx';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu.tsx';
import './Components/SidebarMenu/SidebarMenu.css';

import data from './Data/data.json';

const Root: React.FC<{
}> = () => {
  const [catalogueObjects, setCatalogueObjects] = useState<CatalogueObject>('');
 
  const getDataFromFile: any = async () => {
    try {
  
      const catalogueObjects: CatalogueObject[] = JSON.parse(JSON.stringify(data));
      
      setCatalogueObjects(catalogueObjects);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getDataFromFile();
  }, []); //If the variable inside this dependency array changes then we update. Else if left empty run once.

    
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={2} style={{ backgroundColor: 'lightgray' }}>
        <SidebarMenu></SidebarMenu>
      </Grid>
      <Grid item xs={10} style={{ padding: '20px'}}>
        <CatalogueGrid catalogueObjects={catalogueObjects} />
      </Grid>
    </Grid>
  );
}

export default Root;
