import React from 'react'
import Card1 from '../components/Card1.jsx'
import CardData from '../components/CardData.jsx'
import CardData2 from '../components/CardData2.jsx'
import Header from '../components/Header'
import Footer from '../components/Footer'

import { Box } from '@chakra-ui/react'

import '../styles/team.css'


const Team = () => {
  return (
    <>
    <Header />
    <Box  className='container'>
          
        
          <div className='navbar'>
           <h2 className='title' >OUR TEAM </h2>
           
          </div>
          <div className="con">
          <h1  className='vol'>Core Members</h1>
         </div>
        
        <Card1  bgColor={'white'} details={CardData}/>

       
          <div className="con">
          <h1  className='vol'>Web team</h1>
         </div>
        
        <Card1  bgColor={'white'} details={CardData2}/>
        
       
           
     

    </Box>
    <Footer />
   </>
  )
}

export default Team
