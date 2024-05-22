import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span>&copy; Eviden {new Date().getFullYear()}</span>
    </footer>
  );
};

export default Footer;