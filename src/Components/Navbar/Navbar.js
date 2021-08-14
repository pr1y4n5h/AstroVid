import "./Navbar.style.css";
import { FaRocket, FaBars } from "react-icons/fa";
import Button from "@material-ui/core/Button";

export function Navbar() {
  return (
    <>
      <nav class="navbar">
        <span class="logo">AstroVids 🚀</span>
        <ul class="nav-btns">
        <span className="nav-btn">
          <Button variant="contained">
            <li> Sign up </li>
          </Button>
          </span>
          <span className="nav-btn">
          <Button variant="contained" color="primary">
            <li >Log In </li>
          </Button>
          </span>
        </ul>
      </nav>
    </>
  );
}
