import React from 'react';
import './AboutUsHomePage.css'; 
import KnowMoreButton from './KnowMoreButton';
import { Link } from 'react-router-dom';
const AboutUsHomePage = () => {
    function handleKnowMoreClick() {
        <Link to="/aboutus" />
    }
  return (<>
    <h1 className="about-us-homepage-heading">ABOUT US</h1>
    <div className="about-us-homepage-banner">
        
      <div className="about-us-homepage-image">
      <img src="https://sites.nitjsr.ac.in/nss/images/about_us.png" alt="NSS Logo" />
        
      </div>
      <div className="about-us-homepage-text">
      <h1 className="about-us-homepage-sub-heading">THE STORY SO FAR</h1>
        <p>The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, Ministry of Youth Affairs & Sports. The NIT Jamshedpur unit of NSS consists of 200 Volunteers, along with a core team guided by the Program Coordinator and Program Officers. NSS Volunteers take part in various government led community service activities & programmes.

The sole aim of the NSS is to provide hands on experience to young students in delivering community service. The NSS commitee consists of Dr. Mrutyunjay Rout as Programme Coordinator accompanied by 4 Program Officers. The student body is lead by Nikhil Srivastava as President & Abhishek Verma as vice president respectively</p>
        {/* <KnowMoreButton text="Know More" onClick={handleKnowMoreClick} /> */}
      </div>
      </div>
      </>
  );
};

export default AboutUsHomePage;
