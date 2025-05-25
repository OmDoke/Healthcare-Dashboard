import React from 'react';
import { FaSearch, FaBell, FaPlus } from 'react-icons/fa';
import '../styles/header.css'; // Adjust the path as necessary

const Header = () => (
  <header className="header">
    <h1 className="logo">Health<span>care.</span></h1>
    <div className="search-bar">
      <FaSearch />
      <input type="text" placeholder="Search" disabled />
    </div>
    <div className="header-actions">
      <FaBell className="icon" />
      <img src="https://i.pravatar.cc/40" alt="User Avatar" className="avatar" />
      <button className="add-btn"><FaPlus /></button>
    </div>
  </header>
);

export default Header;