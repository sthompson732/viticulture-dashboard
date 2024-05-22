import React from 'react';
import './Header.css';

interface HeaderProps {
  logoSrc: string;
  userName: string;
  userRole: string;
  currentDate: string;
}

const Header: React.FC<HeaderProps> = ({ logoSrc, userName, userRole, currentDate }) => {
  return (
    <div className="header">
      <img src={logoSrc} alt="Logo" className="logo" />
      <div className="user-info">
        <span className="user-name">{userName}</span>
        <span className="user-role">{userRole}</span>
        <span className="current-date">{currentDate}</span>
      </div>
    </div>
  );
};

export default Header;
