import React from 'react';
import MenuBar from './menu_bar'; // Assuming you have a CommentMenuBar component
import '../css/layout.css'; // Import your CSS file for styling

const layout = ({ children }) => {
  return (
    <div className="layout-container">
      <MenuBar />
      <div className="content">{children}</div>
    </div>
  );
};

export default layout;
