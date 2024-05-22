import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import './Header.css';

interface HeaderProps {
  logoSrc: string;
  userName: string;
  userRole: string;
  currentDate: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, userName, userRole, currentDate }) => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <img src={logoSrc} alt="Logo" className="logo" />
        <Typography variant="h6" className="title">
          Viticulture Dashboard
        </Typography>
        <div className="user-info">
          <Typography variant="body2">{userName}</Typography>
          <Typography variant="body2">{userRole}</Typography>
          <Typography variant="body2">{currentDate}</Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
