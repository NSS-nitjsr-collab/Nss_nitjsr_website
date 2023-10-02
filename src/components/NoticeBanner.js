import React from 'react';
import './NoticeBanner.css'; // Import your CSS file for styling

const NoticeBanner = ({ text }) => {
  return (
    <div className="notice-banner">
        <h1 className="notice-heading">Important Announcements</h1>
      <p className="notice-text">{text}</p>
    </div>
  );
};

export default NoticeBanner;
