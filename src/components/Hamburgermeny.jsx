import React from 'react';

const HamburgerMenu = ({ toggleSidebar }) => {
  return (
    <button onClick={toggleSidebar} className="space-y-2 lg:hidden p-2">
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
      <span className="block w-6 h-0.5 bg-white"></span>
    </button>
  );
};

export default HamburgerMenu;
