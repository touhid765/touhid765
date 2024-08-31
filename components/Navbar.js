import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';


const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/patient/dashboard">Patient Dashboard</Link></li>
        <li><Link to="/doctor/dashboard">Doctor Dashboard</Link></li>
        <li><Link to="/admin/dashboard">Admin Dashboard</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
