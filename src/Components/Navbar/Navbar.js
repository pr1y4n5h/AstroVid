import "./Navbar.style.css";
import { FaRocket, FaBars } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useState } from "react";
import { useLikesContext } from "../../Contexts/LikesContext";
import { useWatchlistContext } from "../../Contexts/WatchlistContext";
import { usePlaylist } from "../../Contexts/PlaylistContext";

export function Navbar() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const { token, logOutUser, loggedUser } = useAuth();
  const [isResponsive, setResponsive] = useState(false);
  const { dispatchLikes } = useLikesContext();
  const { dispatchWatchlist } = useWatchlistContext();
  const { dispatchPlaylist } = usePlaylist();

  const loginHandler = () => {
    return navigate("/login");
  };

  const logOutHandler = () => {
    dispatchLikes({ type: "CLEAR_LIKES" });
    dispatchWatchlist({ type: "CLEAR_WATCHLIST" });
    dispatchPlaylist({ type: "CLEAR_PLAYLIST" });
    logOutUser();
    navigate(state?.from ? state.from : "/");
  };

  return (
    <>
      <nav class="navbar">
        <button
          onClick={() => setResponsive((responsive) => !responsive)}
          className="mobile-menu-icon"
        >
          {isResponsive ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button>

        <ul
          className={isResponsive ? "nav-links-mobile" : "nav-menu"}
          onClick={() => setResponsive(false)}
        >
        { token && <div className="nav-btn-username">
          <h3> Hi {loggedUser?.name}! </h3>
        </div>}
          <NavLink
            className="nav-btn"
            to="/"
            end
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>Home</li>
          </NavLink>

          <NavLink
            className="nav-btn"
            to="/liked"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>Liked</li>
          </NavLink>

          <NavLink
            className="nav-btn"
            to="/playlist"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>Playlist</li>
          </NavLink>

          <NavLink
            className="nav-btn"
            to="/watch-later"
            activeStyle={{ color: "#ff4e00" }}
          >
            <li>Watch Later</li>
          </NavLink>

          <NavLink
            className="nav-btn"
            to="/sign-up"
            activeStyle={{ color: "#ff4e00" }}
            style={token && { display: "none" }}
          >
            <li>Signup</li>
          </NavLink>
        </ul>

        <span class="logo">AstroVids</span>
        <ul class="nav-btns">
          {!token && (
            <span className="nav-signup-btn">
              <Button onClick={() => navigate("/sign-up")} variant="contained">
                <li> Sign up </li>
              </Button>
            </span>
          )}
          {token && (
            <span className="nav-username">Hi {loggedUser?.name}!</span>
          )}
          <span className="nav-btn">
            <Button
              onClick={token ? logOutHandler : loginHandler}
              variant="contained"
              color="primary"
            >
              <li>{token ? "Log Out" : "Log In"} </li>
            </Button>
          </span>
        </ul>
      </nav>
    </>
  );
}
