import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => (
  <div className="simple-card">
    <div className="icon">{icon}</div>
    <div className="details">
      <p>{title}</p>
      <span>{time}</span>
    </div>
  </div>
);

export default SimpleAppointmentCard;