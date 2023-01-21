import React from 'react'
import { Link } from 'react-router-dom'
import { Heading, HStack } from '@chakra-ui/react'
import { useColorMode, Button, Text, } from '@chakra-ui/react'
import { useSelector } from 'react-redux'
function Header() {
  let fontList = ['xs','sm', 'md', 'lg'];
  const { colorMode, toggleColorMode } = useColorMode();
  const { totalPrice } = useSelector(state => state.creducer);
  const textcolor = colorMode === 'light' ? 'white' : 'black';
  return (
    <HStack zIndex='10' justifyContent={'space-between'} position='fixed' bgColor={colorMode === 'light' ? 'black' : 'white'} w='100%' h='fit-content' color={textcolor} >
      <HStack>
        <Heading fontSize={['2xl', '3xl', '4xl', '6xl']} fontFamily="Orbitron">Ecommerce</Heading>
        <Text fontFamily="Orbitron" mr={"8"} as='u' fontSize={fontList}><Link to={'/'}>Home</Link></Text>
        <Text fontFamily="Orbitron" ml={"8"} as='u' fontSize={fontList}><Link to={'/cart'}>Cart</Link></Text>
        <Button p={['1','2']} color='black' colorScheme='blue' onClick={toggleColorMode} >{colorMode === 'light' ? 'Dark' : 'Light'}</Button>
      </HStack>
      <HStack >
        <Text fontSize={[...fontList, '1xl', '2xl', '3xl']}>Total Cost</Text>
        <Text fontSize={['1xl', '2xl', '3xl']}>Rs.{totalPrice}</Text>
      </HStack>
    </HStack>
  )
}

export default Header