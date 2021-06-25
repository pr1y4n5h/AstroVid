import {Link } from "react-router-dom";
import React from "react"
import "../App.css"
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PlayCircleOutlineOutlinedIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import PlaylistAddCheckOutlinedIcon from '@material-ui/icons/PlaylistAddCheckOutlined';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import WatchLaterOutlinedIcon from '@material-ui/icons/WatchLaterOutlined';

export function NormalSideBarMenu() {
    return (
      <div>
      <aside>
        <Link className="sidebar-link"  to="/"> {<HomeOutlinedIcon />} Home </Link>
        <Link className="sidebar-link"  to="/liked"> {<ThumbUpAltOutlinedIcon />} Liked </Link>
        <Link className="sidebar-link"  to="/playlist"> {<PlaylistAddCheckOutlinedIcon />} Playlist </Link>
        <Link className="sidebar-link" to="/watch-later"> {<WatchLaterOutlinedIcon />}  Watch Later</Link>
        <Link className="sidebar-link"  to="/history"> {<HistoryOutlinedIcon />} History </Link>
        </aside>
      </div>
    )
    }