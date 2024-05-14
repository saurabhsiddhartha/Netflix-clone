import React from "react";
import { Link } from "react-router-dom";
import { ImSearch } from 'react-icons/im'; // Correct import for ImSearch icon

const Header = () => {
  return (
      <div className="navbar">
        <img
          src="https://imgs.search.brave.com/iMK0bpQOHFE9qAS6J2UI9mfJ97x8nhrepANtIF_PSds/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy81/ODBiNTdmY2Q5OTk2/ZTI0YmM0M2M1Mjku/cG5n"
          alt="Logo"
        />

      <div className="links">
        <Link to='/'>Home</Link>
        <Link to='/tvShows'>TV Shows</Link>
        <Link to='/movies'>Movies</Link>
        <Link to='/recently'>Recently Added</Link>
        <Link to='/list'>My List</Link>
      </div> 
      <ImSearch/>
    </div>
  );
};

export { Header };
