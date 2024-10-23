import './TopSidebarMenu.css';


const TopSidebarMenu: React.FC<Props> = ({ 
    profile,
}) => {
    return (
        <div className="top-sidebar-menu">
            {console.log(profile)}
            <img src={profile.profilePicturePath} alt={`${profile.name}'s profile`} className="sidebar-image" /> {/* Use the imported image */}
            <h4>{profile.name}</h4>
        </div>
    );
};

export default TopSidebarMenu;
