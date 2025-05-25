import React from 'react';
import '../styles/schedule.css';
import SimpleAppointmentCard from './SimpleAppointmentCard';
import upcomingAppointments from '../data/upcomingAppointments';

const UpcomingSchedule = () => (
  <div className="upcoming-schedule">
    <h3>The Upcoming Schedule</h3>
    <div className="days-container">
      {Object.entries(upcomingAppointments).map(([day, appointments]) => (
        <div key={day} className="day-block">
          <h4>{day}</h4>
          <div className="schedule-cards">
            {appointments.map(app => (
              <SimpleAppointmentCard key={app.title} {...app} />
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);


export default UpcomingSchedule;