import { useEffect, useState } from 'react';
import { Grid } from '@mui/material';

import { CatalogueObject } from './Components/CatalogueGrid/Models/gridModels.ts';
import { Profile } from './Components/SidebarMenu/Models/SidebarMenuModels.ts';

import CatalogueGrid from './Components/CatalogueGrid/CatalogueGrid.tsx';
import SidebarMenu from './Components/SidebarMenu/SidebarMenu.tsx';
import ProjectDetails from './Components/Project/ProjectDetail.tsx';
import './Components/SidebarMenu/SidebarMenu.css';

import data from './Data/data.json';
import manifest from './manifest.json'

const Root: React.FC<{
}> = () => {
  const [profile, setProfile] = useState<Profile>('');
  const [catalogueObjects, setCatalogueObjects] = useState<CatalogueObject>('');
  const [selectedProject, setSelectedProject] = useState<CatalogueObject | null>(null);

  const getDataFromFile: any = async () => {
    try {
  
      const catalogueObjects: CatalogueObject[] = JSON.parse(JSON.stringify(data));
      
      setCatalogueObjects(catalogueObjects);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  const getProfileData: any = async () => {
    try {
  
      const profile: Profile[] = JSON.parse(JSON.stringify(manifest.profile));
      
      setProfile(profile);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  
  useEffect(() => {
    getProfileData();
    getDataFromFile();
  }, []); //If the variable inside this dependency array changes then we update. Else if left empty run once.

    
  return (
    <Grid container style={{ height: '100vh' }}>
      <Grid item xs={2} style={{ backgroundColor: 'lightgray' }}>
        <SidebarMenu profile = {profile}></SidebarMenu>
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
