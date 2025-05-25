import React from 'react';
import anatomy from '../assets/anatomy.jpg';
import '../styles/anatomy.css';

const AnatomySection = () => (
  <div className="anatomy-section">
    <img src={anatomy} alt="Human Anatomy" className="anatomy-image" />
    <div className="anatomy-labels">
      <div className="anatomy-label heart">Healthy Heart</div>
      <div className="anatomy-label leg">Healthy Leg</div>
    </div>
  </div>
);

export default AnatomySection;
