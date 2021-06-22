import {Link } from "react-router-dom";
import { bubble as Sidebar } from 'react-burger-menu';
import React from "react"
import './SidebarStyle.css';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

export function SideBarMenu() {
    return (
      <div>
      <Sidebar>
        <Link className="menu-item"  to="/"> <div> {<HomeOutlinedIcon />} Home </div> </Link>
        <Link className="menu-item"  to="/liked"> {<ThumbUpAltOutlinedIcon />} Liked </Link>
        <Link className="menu-item"  to="/playlist"> {<PlaylistAddCheckOutlinedIcon />} Playlist </Link>
        <Link className="menu-item" to="/watch-later"> {<WatchLaterOutlinedIcon />}  Watch Later</Link>
        <Link className="menu-item"  to="/history"> {<HistoryOutlinedIcon />} History </Link>
      </Sidebar>
      </div>
    )
    }