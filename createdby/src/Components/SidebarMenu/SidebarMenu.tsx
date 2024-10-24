import React from 'react';
import './SidebarMenu.css';
import TopSidebarMenu from './TopSidebarMenu.tsx';
import OptionGenerator from './SidebarItems/OptionGenerator.tsx';
import { Profile, Option } from './Components/SidebarMenu/Models/SidebarMenuModels.ts';

interface Props {
  options: Option[];
  profile: Profile; // Change to a single Profile instead of an array
  onMenuItemClick: (id: number) => void;
}

const SidebarMenu: React.FC<Props> = ({
  options,
  profile,
  onMenuItemClick,
}) => {
  return (
    <div className="sidebar-menu">
      <TopSidebarMenu profile={profile} />
      <OptionGenerator options={options} onOptionClick={onMenuItemClick} />
    </div>
  );
};

export default SidebarMenu;
