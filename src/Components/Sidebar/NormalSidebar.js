import { NavLink } from "react-router-dom";
import React from "react";
import "./NormalSidebar.style.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import PlaylistAddCheckOutlinedIcon from "@material-ui/icons/PlaylistAddCheckOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";

export function NormalSideBarMenu() {
  return (
    <>
      <aside className="sidebar-aside">
        <ul className="sidebar-aside-ul">
          <NavLink
            className="sidebar-link"
            to="/"
            end
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>{<HomeOutlinedIcon />} Home </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/liked"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>{<ThumbUpAltOutlinedIcon />} Liked </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/playlist"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>{<PlaylistAddCheckOutlinedIcon />} Playlist </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/watch-later"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>{<WatchLaterOutlinedIcon />} Watch Later </li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}
