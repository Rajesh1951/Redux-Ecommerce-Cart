import { Text, Box, Button, HStack, Image, VStack, Stack, } from '@chakra-ui/react'
import React from 'react';
import { useDispatch } from 'react-redux'
import { HiPlus, HiMinus } from 'react-icons/hi'
import { list } from '../items'

function Homee() {
  const dispatch = useDispatch();
  function handler_add(item) {
    dispatch({
      type: 'add',
      payload: item
    })
  }
  function handler_remove(item) {
    dispatch({
      type: 'remove',
      payload: item
    })
  }
  // const [isSmallThan500] = useMediaQuery('(max-width: 501px)')
  let fontList = ['sm', 'md', 'lg'];
  let marginList = ['8', '12', '16'];
  return (
    <Box>
      <HStack>
        <Box m={['1', 'auto']} w={['90%', '75%']} >
          {list.map((i, ind) => <p key={ind} >
            <Stack m='2' borderBottom='2px solid grey' mt={ind === 0 ? marginList : '1'} flexDir='row' maxH='max-image'>
              <Image src={i.image} boxSize={150} mt='auto' mb='auto' ml='1' />
              <VStack justifyContent='center' alignItems='flex-start'>
                <Text fontSize={fontList} fontFamily={"Roboto"} ml='10' as='b' >{i.name}</Text>
                <Text fontSize={fontList} pl='10' as='b' >Price:Rs {i.price}</Text>
                <HStack mb='10'>
                  <Button fontSize={fontList} leftIcon={<HiPlus />} colorScheme='green' onClick={() => handler_add(i)}>Add to Cart</Button>
                  <Button fontSize={fontList} leftIcon={<HiMinus />} colorScheme='red' onClick={() => handler_remove(i)}>Remove from Cart</Button>
                </HStack>
              </VStack >
            </Stack>
          </p>)}
        </Box>
      </HStack >
    </Box >
  )
}


export default Homee