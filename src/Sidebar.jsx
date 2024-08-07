import React from 'react';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PagesIcon from '@mui/icons-material/Pages';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import TableChartIcon from '@mui/icons-material/TableChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import DescriptionIcon from '@mui/icons-material/Description';
import MapIcon from '@mui/icons-material/Map';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="navbar-brand-box">
        <a className="logo" href="/xacton/vertical/">
          <span>Xacton</span>
        </a>
      </div>
      <div className="menu-items">
        <div className="menu-item">
          <DashboardIcon className="icon" />
          <span className="text">Dashboard</span>
        </div>
        <div className="menu-item">
          <PagesIcon className="icon" />
          <span className="text">Pages</span>
        </div>
        <div className="menu-item">
          <CalendarTodayIcon className="icon" />
          <span className="text">Calendar</span>
        </div>
        <div className="menu-item">
          <TableChartIcon className="icon" />
          <span className="text">Tables</span>
        </div>
        <div className="menu-item">
          <BarChartIcon className="icon" />
          <span className="text">Charts</span>
        </div>
        <div className="menu-item">
          <DescriptionIcon className="icon" />
          <span className="text">Forms</span>
        </div>
        <div className="menu-item">
          <MapIcon className="icon" />
          <span className="text">Maps</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
