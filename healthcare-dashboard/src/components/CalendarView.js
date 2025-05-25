import React from 'react';
import calendarAppointments from '../data/calendarAppointments';
import '../styles/calendar.css';
import UpcomingSchedule from './UpcomingSchedule';

const CalendarView = () => {
  const daysInWeek = 7;
  const currentWeek = calendarAppointments.slice(0, daysInWeek); // Only one week shown (adjust if needed)

  return (
    <div className="calendar-section">
      <div className="calendar-header mb-6">
        <h3 className="text-xl font-bold text-gray-800">October 2021</h3>
      </div>

      {/* Grid: 7 Columns for Sunday to Saturday */}
      <div className="grid grid-cols-7 gap-4 calendar-grid">
        {currentWeek.map(day => (
          <div
            key={day.date}
            className="calendar-day p-4 rounded-xl shadow border flex flex-col justify-between"
            style={{ minHeight: '220px' }} // Ensures enough space in each box
          >
            {/* Date and Day */}
            <div className="day-header text-center mb-2">
              <p className="calendar-date font-bold text-sm text-gray-700">{day.date}</p>
              <p className="calendar-day-label text-xs text-gray-500">{day.day}</p>
            </div>

            {/* Times */}
            <div className="space-y-2">
              {day.times.map(time => (
                <span
                  key={time}
                  className="block bg-indigo-100 text-indigo-700 text-xs py-1 px-2 rounded-lg border border-indigo-200"
                >
                  {time}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* Appointments side-by-side BELOW the calendar grid */}
      <div className="appointments-wrapper flex flex-row gap-4 mt-6">
        <div className="appointment-card bg-indigo-100 text-indigo-900 p-4 rounded-lg text-sm border w-full">
          <div className="flex justify-between items-center font-semibold mb-2">
            <span>Dentist</span>
            <span>🦷</span>
          </div>
          <p>09:00–11:00</p>
          <p>Dr. Cameron</p>
        </div>

        <div className="appointment-card bg-indigo-50 text-indigo-800 p-4 rounded-lg text-sm border w-full">
          <div className="flex justify-between items-center font-semibold mb-2">
            <span>Physiotherapy</span>
            <span>🦵</span>
          </div>
          <p>11:00–12:00</p>
          <p>Dr. Kevin</p>
        </div>
      </div>
      <div>
         <UpcomingSchedule />
      </div>

    </div>
  );
};

export default CalendarView;
