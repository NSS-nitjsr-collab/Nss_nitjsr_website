import React from 'react';
import '../styles/NSSHomepageFirstHalf.css'
import KnowMoreButton from './KnowMoreButton';
import { Link } from 'react-router-dom';


const NSSHomepageFirstHalf = () => {
    const handleKnowMoreClick = () => {
        // Handle the "Know More" button click event
        <Link to="/aboutus" />
      };
  return (
    <div className="nss-homepage-first-half">
      <div className="left-half">
        <h1>Welcome to NSS Organization</h1>
        <p>
        Not me but you!
        </p>
        {/* <KnowMoreButton text="Know More" onClick={handleKnowMoreClick} /> */}
      </div>
      <div className="right-half">
        <img src="https://avatars.githubusercontent.com/u/134844128?v=4" alt="NSS Logo" />
      </div>
    </div>
  );
};

export default NSSHomepageFirstHalf;
