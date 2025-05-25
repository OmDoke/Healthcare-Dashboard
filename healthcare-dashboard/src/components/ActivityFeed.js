import React from 'react';

const ActivityFeed = () => (
  <div className="activity-feed">
    <h3>Activity</h3>
    <p>3 appointments on this week</p>
    <div className="bar-chart">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="bar">
          <div className="fill"></div>
        </div>
      ))}
    </div>
  </div>
);

export default ActivityFeed;