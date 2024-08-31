import React from 'react';
import './styles.css'; // Import the stylesheet

const Dashboard = ({ title }) => {
  return (
    <div className="dashboard">
      <h1>{title}</h1>
      <p>Welcome to the {title}.</p>
    </div>
  );
};

export default Dashboard;
