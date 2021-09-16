import { NavLink } from "react-router-dom";
import "./NormalSidebar.style.css";
import {
  HomeOutlined,
  ThumbUpAltOutlined,
  WatchLaterOutlined,
  PlaylistAddCheckOutlined,
} from "@material-ui/icons";

export function NormalSideBarMenu() {
  return (
    <>
      <aside className="sidebar-aside">
        <ul className="sidebar-aside-ul">
          <NavLink
            className="sidebar-link"
            to="/"
            end
            activeStyle={{ background: "#ff4e00" }}
          >
            <li>{<HomeOutlined />} Home </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/liked"
            activeStyle={{ background: "#ff4e00" }}
          >
            <li>{<ThumbUpAltOutlined />} Liked </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/playlist"
            activeStyle={{ background: "#ff4e00" }}
          >
            <li>{<PlaylistAddCheckOutlined />} Playlist </li>
          </NavLink>
          <NavLink
            className="sidebar-link"
            to="/watch-later"
            activeStyle={{ background: "#ff4e00" }}
          >
            <li>{<WatchLaterOutlined />} Watch Later </li>
          </NavLink>
        </ul>
      </aside>
    </>
  );
}
