import { useEffect, useState } from 'react';
import { Grid, Paper } from '@mui/material';

import { CatalogueObject } from './Components/CatalogueGrid/Models/gridModels.ts';
import { Profile, Option } from './Components/SidebarMenu/Models/SidebarMenuModels.ts';

import CatalogueGrid from './Components/CatalogueGrid/CatalogueGrid.tsx';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu.tsx';
import ProjectDetails from './Components/Project/ProjectDetail.tsx';
import './Components/SidebarMenu/SidebarMenu.css';

import data from './Data/data.json';
import option from './Data/Options.json';
import manifest from './manifest.json'

const Root: React.FC<{
}> = () => {
  const [options, setOptions] = useState<Option>('');
  const [profile, setProfile] = useState<Profile>('');
  const [catalogueObjects, setCatalogueObjects] = useState<CatalogueObject>('');
  const [selectedProject, setSelectedProject] = useState<CatalogueObject | null>(null);

  const getDataFromFiles: any = async () => {
    try {
  
      const catalogueObjects: CatalogueObject[] = JSON.parse(JSON.stringify(data));
      const options: Option[] = JSON.parse(JSON.stringify(option));
      const profile: Profile[] = JSON.parse(JSON.stringify(manifest.profile));

      setOptions(options);
      setCatalogueObjects(catalogueObjects);
      setProfile(profile);

    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getDataFromFiles();
  }, []); //If the variable inside this dependency array changes then we update. Else if left empty run once.

    
  return (
    <Grid container style={{ height: '100vh', padding: 0, margin: 0 }}>
      <Grid item xs={2} style={{ backgroundColor: 'lightgray' }}>
        <Paper elevation={5} ><SidebarMenu options = {options} profile = {profile}></SidebarMenu></Paper>
      </Grid>
      <Grid item xs={10} style={{ padding: '20px'}}>
        {selectedProject ? ( // Check if a project is selected
          <ProjectDetails 
            project={selectedProject} 
            onBack={() => setSelectedProject(null)} 
            />
        ) : (
          <CatalogueGrid
            catalogueObjects={catalogueObjects}
            onItemClick={(project) => setSelectedProject(project)}
          />
        )}
      </Grid>
    </Grid>
  );
}

export default Root;
