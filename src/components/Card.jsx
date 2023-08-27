import { Image, Heading, Wrap, Box } from '@chakra-ui/react'
import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <Wrap display={'flex'} justifyContent={'center'} justify={'center'} className='cards'>
      {props.details.map((value, index) => (
        <Box key={index} className='card'>
          <Image className='image' src={value.img}/>
          <Heading className='heading'>{value.title}</Heading>
          <Heading className='heading'>{value.position}</Heading>
          <Box className='discription'><span className='coma'>❝</span>{value.discription}</Box>
        </Box>
      ))}
    </Wrap>
  )
}

export default Card
