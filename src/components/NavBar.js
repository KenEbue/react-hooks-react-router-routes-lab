import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar"> {/* Add the "navbar" class to the div */}
      <ul> {/* Add an unordered list */}
        <li>
          <NavLink to="/">Home</NavLink> {/* Wrap each NavLink in a list item */}
        </li>
        <li>
          <NavLink to="/movies">Movies</NavLink>
        </li>
        <li>
          <NavLink to="/directors">Directors</NavLink>
        </li>
        <li>
          <NavLink to="/actors">Actors</NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavBar;
