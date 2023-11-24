import { Image, Heading, Wrap, Box } from '@chakra-ui/react'
import React from 'react'


const Card1 = (props) => {
  return (
    <Wrap display={'flex'} justifyContent={'center'} justify={'center'} className='Card1s'>
      {props.details.map((value, index) => (
        <Box key={index} className='Card1'>
          <Image className='image' objectFit='contain' src={value.img}/>
          <Heading className='heading'>{value.title}</Heading>
          <Heading className='heading'>{value.position}</Heading>
          <Box className='discription'><span className='coma'>❝</span>{value.discription}</Box>
        </Box>
      ))}
    </Wrap>
  )
}

export default Card1
