import React from 'react';
import { Link } from "@inertiajs/react";

import '../css/layout.css';

const MenuBar = () => {
  return (
    <div className="comment-menu-bar">
      <ul>
        <li><Link href="/register">Registration</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/logout">Logout</Link></li>
        <li><Link href="/dashboard">Dashboard (protected)</Link></li>
      </ul>
    </div>
  );
};

export default MenuBar;
