import React from 'react';
import healthData from '../data/healthData';

const HealthStatusCards = () => (
  <div className="health-status-cards">
    {healthData.map(item => (
      <div key={item.name} className="status-card">
        <div className="card-icon">{item.icon}</div>
        <div className="card-info">
          <h4>{item.name}</h4>
          <p>{item.date}</p>
          <div className={`status-bar ${item.status.toLowerCase()}`}></div>
        </div>
      </div>
    ))}
  </div>
);

export default HealthStatusCards;