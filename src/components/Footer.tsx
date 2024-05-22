import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <p>Eviden © {new Date().getFullYear()} Viticulture Dashboard. All rights reserved.</p>
    </div>
  );
};

export default Footer;