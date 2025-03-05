import React, { useState } from 'react'
import axios from 'axios'
import { Box, Button, Flex, HStack, Input } from '@chakra-ui/react'
import Mealcards from '../Mealcards'


const Mainpage = () => {

  const [data, setData] = useState()
  const [search, setSearch] = useState()

  const handleInput = (event) => {
    setSearch(event.target.value)
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
      console.log(response.data);
      setData(data)
    } catch (error) {
      console.error(error); 
    }
  };

  // console.log(data)
  
  // fetchData();


  return (
    <>
    <Flex justify='center'>
    <Box className='container'>
        <Box className='searchBar' display='flex' justify='center' mt='25px'>
            <HStack>
                <Input w='400px' p='9px' fontSize='20px' background-color=' #e7e7e7' borderRadius='6px' type='text' placeholder='Enter Dish' onChange={handleInput}/>
                <Button w='80px' fontSize='20px' borderRadius='6px' onClick={fetchData}>search</Button>
            </HStack>
        </Box>

      <Box>
        
      </Box>

    </Box>
    </Flex>
    </>
  )
}

export default Mainpage