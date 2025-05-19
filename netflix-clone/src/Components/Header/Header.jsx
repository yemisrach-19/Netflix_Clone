import React from "react";
import "./Header.css";
import Netflix_logo from "../../assets/Images/Netflix_Logo_PMS.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <img src={Netflix_logo} alt="Netflix_logo" width="100" />
        <ul>
          <li>Home</li>
          <li>TVShows</li>
          <li>Movies</li>
          <li>New and Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li>
            <SearchIcon />
          </li>
          <li>
            <NotificationsNoneIcon />
          </li>
          <div className="navbar-profile">
            <li>
              <AccountBoxIcon />
            </li>

            <li>
              <ArrowDropDownIcon />
            </li>
            <div className="dropdown">
              <p>sign out of Netflix</p>
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Header;
