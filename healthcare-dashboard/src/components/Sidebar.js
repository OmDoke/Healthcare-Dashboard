import React from 'react';
import { FaCalendar, FaChartBar, FaComments, FaCogs, FaHeartbeat, FaHistory, FaUserMd, FaQuestion } from 'react-icons/fa';
import navLinks from '../data/navigationLinks';

const Sidebar = () => (
  <aside className="sidebar">
    <h2 className="sidebar-title">General</h2>
    <ul className="nav-links">
      {navLinks.map(link => (
        <li key={link.label}><link.icon /> {link.label}</li>
      ))}
    </ul>
  </aside>
);

export default Sidebar;