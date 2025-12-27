import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useCookies } from "react-cookie";

const Menu = ({username}) => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [, ,removeCookie] = useCookies([]);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleLogout = async() => {
    removeCookie("token");
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`,
        {},
        { withCredentials: true }
      );
    } catch (err) {
      console.error(err);
    } finally {
      window.location.href = process.env.REACT_APP_FRONTEND_URL;
    }
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" alt="kite logo" style={{ width: "50px" }} />
      <div className="menus">
        <ul>
          <li>
            <Link
              to="/"
              onClick={() => {
                handleMenuClick(0);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/orders"
              onClick={() => {
                handleMenuClick(1);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/holdings"
              onClick={() => {
                handleMenuClick(2);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/positions"
              onClick={() => {
                handleMenuClick(3);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/funds"
              onClick={() => {
                handleMenuClick(4);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              to="/apps"
              onClick={() => {
                handleMenuClick(5);
              }}
              style={{ textDecoration: "none" }}
            >
              <p className={selectedMenu === 5 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">{username ? username.charAt(0).toUpperCase() : "JU"}</div>
          <p className="username">{username}</p>
        </div>
        {isProfileOpen && (
          <div className="profile-popup text-center">
            <h5>{username}</h5>
            <button onClick={handleLogout}>Logout</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;
