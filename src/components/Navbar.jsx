import React, { useState } from "react";
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft, FaUserCircle, FaCaretDown } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser, toggleSidebar } from "../features/user/userSlice";

const Navbar = () => {
  const { user } = useSelector((store) => store.user);
  const dispath = useDispatch();
  const [showLogOut, setShowLogOut] = useState(false);
  function toggle() {
    dispath(toggleSidebar());
  }
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggle}>
          <FaAlignLeft />
        </button>

        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogOut(!showLogOut)}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogOut ? "dropdown show-dropdown" : "dropdown"}>
            <button
              className="dropdown-btn"
              type="button"
              onClick={() => dispath(logoutUser())}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
