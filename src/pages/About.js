import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import '../components/about.css';

const About = () => {
  return (
    <>
    <Header />
    <div className='container'>
      <p className="indented">
      <h2>THE STORY SO FAR</h2>
      <br></br>
      <h1>About Us</h1>
      <br></br>
      The National Service Scheme (NSS) is a Central Sector Scheme of Government of India, 
      Ministry of Youth Affairs & Sports. The NIT Jamshedpur unit of NSS consists of 500+ 
      Volunteers, along with a core team guided by the Program Coordinator and Program 
      Officers. NSS Volunteers take part in various government led community service 
      activities & programmes. The sole aim of the NSS is to provide hands on experience 
      to young students in delivering community service. The NSS commitee consists of 
      Dr. Jayendra Kumar as Programme Coordinator. The student body is lead by 
      Ronit Ranjan as President, Aditi Prasad as Vice President and General and Joint Secretaries.
      <br></br><br></br>
      Participating in NSS activities can provide students with opportunities 
      to develop leadership skills, enhance their understanding of social issues, 
      and contribute to the betterment of society. Additionally, NSS volunteers often 
      gain valuable experiences, interpersonal skills, and a sense of social responsibility 
      that can positively impact their personal and professional lives.
      </p>


    </div>

    <Footer />
    </>
  )
}

export default About