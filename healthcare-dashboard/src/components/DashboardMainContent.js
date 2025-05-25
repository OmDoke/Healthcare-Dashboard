// components/DashboardMainContent.jsx
import React from 'react';
import AnatomySection from './AnatomySection';
import CalendarView from './CalendarView';
import Sidebar from './Sidebar';
import UpcomingSchedule from './UpcomingSchedule';


const DashboardMainContent = () => {
  return (
    <div className="dashboard-layout flex min-h-screen bg-gray-50">
      {/* Sidebar - Optional */}
      <Sidebar />

      {/* Main Content Area */}
      <div className="main-content w-full lg:w-5/6 flex p-6">
        {/* Anatomy + Calendar Section Side by Side */}
        <div className="content-wrapper flex flex-col lg:flex-row w-full gap-6">
          {/* Anatomy Image Wrapper */}
          <div className="anatomy-wrapper w-full lg:w-2/5 bg-white rounded-xl shadow-md p-4">
            <AnatomySection />
          </div>

          {/* Calendar & Upcoming Schedule Wrapper */}
          <div className="calendar-wrapper w-full lg:w-3/5 flex flex-col gap-6">
            <div className="calendar-box bg-white rounded-xl shadow-md p-4 overflow-y-auto max-h-[500px]">
              <CalendarView />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;