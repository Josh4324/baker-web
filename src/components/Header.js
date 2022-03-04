import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false);
  const changeBar = () => {
    setShow(!show);
  };
  return (
    <div className="header">
      <div style={{ display: "flex" }}>
        <img
          className="ham"
          onClick={changeBar}
          src="/images/ham.svg"
          alt="ham"
        />
        <Link to="/">
          <div>
            <img src="/images/logo.jpg" alt="logo" style={{ width: "100px" }} />
          </div>
        </Link>
      </div>

      <div
        className={
          show === true ? "header-inner animation1" : "header-inner animation2"
        }
      >
        <NavLink
          to="/"
          className={(navData) => (navData.isActive ? "active" : "normal")}
        >
          <div className="nav-item">Home</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/dashboard"
        >
          <div className="nav-item">Dashboard</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/realestate"
        >
          <div className="nav-item">Real Estate</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/virtualtours"
        >
          <div className="nav-item">Virtual Tours</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/services"
        >
          <div className="nav-item">Services</div>
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active" : "normal")}
          to="/dapp"
        >
          <div className="nav-item">Dapp</div>
        </NavLink>
      </div>

      <button className="wallet">Connect Wallet</button>
    </div>
  );
}
