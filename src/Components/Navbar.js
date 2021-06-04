import react from "react";
import {Link } from "react-router-dom";

export function Navbar() {

    return(
        <div class="navbar">
        <span style={{ margin: "1rem", fontSize: "3rem", fontWeight: "bolder" }}>
        AstroVID 🚀
      </span>
      <nav>
        <ul class="navigation">
          <li class="navigation-content">
            <Link style={{ textDecoration: "none" }} to="/myaccount"> My account </Link>
          </li>

          <li class="navigation-content">
            <Link style={{ textDecoration: "none" }} to="/signin"> Sign In </Link>
          </li>

        </ul>
      </nav>
      </div>
    )
}