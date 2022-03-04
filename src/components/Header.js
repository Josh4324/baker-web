import React from "react";
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <div className="header-inner">
        <Link to="/">
          <div className="nav-item">Logo</div>
        </Link>
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
