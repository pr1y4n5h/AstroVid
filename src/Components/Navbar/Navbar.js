import "./Navbar.style.css";
import { FaRocket, FaBars } from "react-icons/fa";
import Button from "@material-ui/core/Button";
import {useNavigate, useLocation, NavLink} from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import {useState} from "react";

export function Navbar() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {token, logOutUser} = useAuth();
  const [isResponsive, setResponsive] = useState(false);

  const loginHandler = () => {
    return navigate("/login")
  }

  const logOutHandler = () => {
    logOutUser()
    navigate(state?.from ? state.from : "/");
  }

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
          <NavLink
            className="nav-btn"
            to="/"
            end
            activeStyle={{ color: "var(--primary-color)" }}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            className="nav-btn"
            to="/products"
            activeStyle={{ color: "var(--primary-color)" }}
          >
            <li>Products</li>
          </NavLink>

          <NavLink
            className="nav-btn"
            to="/sign-up"
            activeStyle={{ color: "var(--primary-color)" }}
            style={token && { display: "none" }}
          >
            <li>Sign up</li>
          </NavLink>
        </ul>

        <span class="logo">AstroVids 🚀</span>
        <ul class="nav-btns">
        <span className="nav-btn">
          <Button onClick={() => navigate("/sign-up")} variant="contained">
            <li> Sign up </li>
          </Button>
          </span>
          <span className="nav-btn">
          <Button onClick={token ? logOutHandler : loginHandler} variant="contained" color="primary">
            <li >{token ? "Log Out" : "Log In"} </li>
          </Button>
          </span>
        </ul>
      </nav>
    </>
  );
}
