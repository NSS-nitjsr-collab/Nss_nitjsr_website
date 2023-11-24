import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from "react-router-dom";

import { Button} from "@material-tailwind/react";

export const Yearbook = () => {
  return (
    <>
        <Header/>
        <div className=' year m-12 p-4'>
            <div className=' text-4xl font-semibold text-left pb-4'>YearBook</div>
            <div className='text-justify'>
            The National Service Scheme (NSS) is a transformative initiative that has left an indelible mark on countless lives across the globe. Founded with the aim of instilling the values of community service, leadership, and social responsibility in the youth, NSS has become a cornerstone of civic engagement.
            Encompassing diverse activities, NSS volunteers immerse themselves in projects that span healthcare, education, environmental conservation, and disaster relief. This multifaceted approach not only benefits the communities they serve but also fosters personal growth and development among the participants.
            NSS is a platform that transcends geographical boundaries, bringing together individuals from different walks of life, united by a common purpose. It empowers young people to be agents of change, promoting a sense of belonging and national unity. Through their collective efforts, NSS volunteers bridge gaps, break down barriers, and create a more inclusive society.
            The impact of NSS extends far beyond the immediate communities it serves. It creates a ripple effect of positive change, inspiring others to take up the mantle of service. Moreover, NSS alumni often carry the values and lessons learned into their professional and personal lives, making a lasting difference in society.
            In a world where the need for compassion and cooperation is ever-present, the National Service Scheme stands as a shining example of what can be achieved when individuals come together to serve a higher purpose. It is a testament to the potential of the youth to shape a better future for all.
            </div>
            <div className='yearBtn' style={{ display:"flex", flexWrap:"wrap",justifyContent:'space-around',alignItems:'center', columnGap:'10%', width:"80%", marginTop:"50px"}}>
          <Button variant="gradient" size="md" className="mb-2">
              <Link to={"https://drive.google.com/file/d/1SGdt0yRhLLWAeQaT_sKPyzLP1ASGn8mN/view?usp=drive_link"} className="nav-link ">              
                <span>2023</span>
              </Link>
          </Button>
          <Button variant="gradient" size="md" className="mb-2">
              <Link to={"https://drive.google.com/file/d/1SGdt0yRhLLWAeQaT_sKPyzLP1ASGn8mN/view?usp=drive_link"} className="nav-link ">             
                <span>2022</span>
              </Link>
          </Button>
          <Button variant="gradient" size="md" className="mb-2">
              <Link to={"https://drive.google.com/file/d/1SGdt0yRhLLWAeQaT_sKPyzLP1ASGn8mN/view?usp=drive_link"} className="nav-link ">           
                <span>2021</span>
              </Link>
          </Button>
          <Button variant="gradient" size="md" className="mb-2">
              <Link to={"https://drive.google.com/file/d/1SGdt0yRhLLWAeQaT_sKPyzLP1ASGn8mN/view?usp=drive_link"} className="nav-link ">           
                <span>2020</span>
              </Link>
          </Button>

          </div>
          
        </div>
        <Footer/>
    </>
  )
}

export default Yearbook;