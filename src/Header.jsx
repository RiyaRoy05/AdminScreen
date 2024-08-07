import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import './Header.css'; 
import avatar from './avatar-3.jpg';
import usFlag from './us.jpg';

const Header = () => {
    return (
        <div className="header">
          <div className="toolbar">
            <div className="menu">
              <MenuIcon />
              <h5 className="create-new">+ Create New</h5>
            </div>
            <div className="right-items">
              <div className="search">
                <SearchIcon />
              </div>
              <div className="language">
                <img src={usFlag} alt="US Flag" className="flag" />
                <span>English</span>
              </div>
              <div className="notifications">
                <NotificationsIcon />
                <span className="notification-count">3</span>
              </div>
              <div className="user-info">
                <img src={avatar} alt="Jamie D" className="avatar" />
                <span className="user-name">Jamie D.</span>
              </div>
            </div>
          </div>
        </div>
      );
};

export default Header;
