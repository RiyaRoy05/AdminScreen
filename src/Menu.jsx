import React from 'react';
import './Menu.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

const Menu = () => {
  return (
      <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
      <Dashboard/>
      </div>
    </div>
  );
};

export default Menu;
