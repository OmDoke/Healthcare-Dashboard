import logo from './logo.svg';
import './App.css';

import React from 'react';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import DashboardMainContent from './components/DashboardMainContent';
import './styles/components.css';

const App = () => (
  <div className="app-container">
    {/* <Sidebar /> */}
    <div className="main-content">
      <Header />
      <DashboardMainContent />
    </div>
  </div>
);

export default App;