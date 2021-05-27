import {Link } from "react-router-dom";
import { bubble as Sidebar } from 'react-burger-menu';
import React from "react"
import './SidebarStyle.css';

export function SideBarMenu() {
    return (
      <Sidebar>
        <Link className="menu-item"  to="/"> Home </Link>
        <Link className="menu-item"  to="/videos"> Videos </Link>
        <Link className="menu-item"  to="/liked"> Liked </Link>
        <Link className="menu-item"  to="/playlist"> Playlist </Link>
      </Sidebar>
    )
    }