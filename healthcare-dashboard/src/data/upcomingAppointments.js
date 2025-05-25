import { FaHeartbeat, FaEye, FaUserMd, FaBrain } from 'react-icons/fa';

export default {
  'On Thursday': [
    { title: 'Health checkup complete', time: '11:00 AM', icon: <FaHeartbeat /> },
    { title: 'Ophthalmologist', time: '14:00 PM', icon: <FaEye /> },
  ],
  'On Saturday': [
    { title: 'Cardiologist', time: '12:00 AM', icon: <FaUserMd /> },
    { title: 'Neurologist', time: '16:00 PM', icon: <FaBrain /> },
  ]
};