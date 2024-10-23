import React from 'react';

import './SidebarMenu.css';
import TopSidebarMenu from './TopSidebarMenu.tsx';


const SidebarMenu = () => {
    return (
        <div className="sidebar-menu">
            <TopSidebarMenu></TopSidebarMenu>

            <p>Menu Item 1</p>
            <p>Menu Item 2</p>
            <p>Menu Item 3</p>
        </div>
    );
};

export default SidebarMenu;
