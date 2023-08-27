import React from 'react'
import Card from './components/Card'
import CardData from './components/CardData'
import { Box } from '@chakra-ui/react'
import CardData2 from './components/CardData2'



const teams = () => {
  return (
    <Box  className='container'>
          
        
          <div className='navbar'>
           <h2 className='title' >OUR TEAM </h2>
           
          </div>
          <div className="con">
          <h1  className='vol'>Core Members</h1>
         </div>
        
        <Card  bgColor={'white'} details={CardData}/>

       
          <div className="con">
          <h1  className='vol'>Web team</h1>
         </div>
        
        <Card  bgColor={'white'} details={CardData2}/>
        
       
           
     

    </Box>
   
  )
}

export default teams
