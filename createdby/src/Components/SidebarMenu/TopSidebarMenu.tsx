import './TopSidebarMenu.css';
import { fetchRepoCount } from '../../Scripts/GetRepos.js';
import { useEffect, useState } from 'react';
const TopSidebarMenu: React.FC<Props> = ({ 
    profile,
}) => {

    const [repoCount, setRepoCount] = useState<number | null>(null);

    useEffect(() => {
        const getRepoCount = async () => {
            const count = await fetchRepoCount(); // Call the imported function
            setRepoCount(count); // Update the state with the repo count
        };
        
        getRepoCount(); // Execute the async function
    }, []);

    return (
        <div className="top-sidebar-menu">
            {console.log(profile)}
            <img src={profile.profilePicturePath} alt={`${profile.name}'s profile`} className="sidebar-image" /> 
            <h4>{profile.name}</h4>
            <div className="repo-count">
                {repoCount !== null && <p>Total public repositories: {repoCount}</p>}
            </div>
        </div>
    );
};

export default TopSidebarMenu;
