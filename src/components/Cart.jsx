import { Text, Box, Button, HStack, Image, VStack, Stack, } from '@chakra-ui/react'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MdDelete } from 'react-icons/md'
function Cart() {
  let fontList = ['sm', 'md', 'lg'];
  let marginList = ['4', '8', '12', '16'];
  const { cart } = useSelector(state => state.creducer)
  const dispatch = useDispatch();
  function handlerRemoveAll(item) {
    dispatch({
      type: 'removeAll',
      payload: item
    })
  }
  return (
    <Box>
      <HStack>
        <Box m={['1', 'auto']} w={['90%', '75%']} mt={'12'}>
          {cart.map((i, ind) => <p key={ind} >
            <Stack m='2' borderBottom='2px solid grey' mt={ind === 0 ? marginList : '1'} flexDir='row' maxH='max-image'>
              <Image src={i.image} boxSize={150} mt='auto' mb='auto' ml='1' />
              <VStack justifyContent='center' alignItems='flex-start'>
                <Text fontSize={[...fontList]} fontFamily={"Roboto"} ml='10' as='b' >{i.name}</Text>
                <Text fontSize={[...fontList]} pl='10' as='b' >Price:Rs {i.price}</Text>
                <HStack mb='10'>
                  <Button leftIcon={<MdDelete />} colorScheme='red' mb='3' ml='20' onClick={() => handlerRemoveAll(i)}>Remove from Cart</Button>
                </HStack>
              </VStack >
            </Stack>
          </p>)}
        </Box>
      </HStack >
    </Box >
  )
}

export default Cart