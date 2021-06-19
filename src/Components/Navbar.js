import react from "react";
import {Link } from "react-router-dom";
import "../App.css"

export function Navbar() {

    return(
        <div class="navbar">
        <span class="logo">
        AstroVids 🚀
      </span>
      <nav>
        <ul class="navigation">
          <li class="navigation-content">
            <Link to="/myaccount" className="nav-link"> My account </Link>
          </li>

          <li class="navigation-content">
            <Link to="/signin" className="nav-link"> Sign In </Link>
          </li>

        </ul>
      </nav>
      </div>
    )
}