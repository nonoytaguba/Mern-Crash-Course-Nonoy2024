import {Container, Flex, Text, Button, HStack, useColorMode} from '@chakra-ui/react';
import {Link} from 'react-router-dom';
import { CiSquarePlus } from "react-icons/ci";
import {IoMoon} from "react-icons/io5";
import { LuSun } from "react-icons/lu";


const Navbar = () => {
  const {colorMode, toggleColorMode} = useColorMode();
  // const {products}= useProductStore();

  return ( 
   <Container maxW={"1140px"} px={4}>
    <Flex
      h={16}
      alignItems={"center"}
      justifyContent={"space-between"}
      flexDir={{
        base:"column",
        sm: "row"
      }}
    >
      <Text
      // fontSize='50px'
          fontSize={{base:"22", sm: "28"}}
          fontWeight={"bold"}
          textTransform={"uppercase"}
          textAlign={"left"}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          // bgGradient={"linear(to-r, cyan.400, blue.500"}
          bgClip={"text"}
      >
          <Link to={"/"}>Product Store 🛒</Link>
      </Text>
      <HStack spacing={2} alignItems={"center"}>
        <Link to={"/create"}>
          <Button>
          <CiSquarePlus fontSize = {20}/>
          </Button>
        </Link>
        {/* <Button onClick={toggleColorMode}>{colorMode ==="light"?"🌙":"😊"}</Button> */}
        <Button onClick={toggleColorMode}>{colorMode ==="light"?<IoMoon/>:<LuSun />}</Button>
      </HStack>
    </Flex>
   </Container>
  )
}

export default Navbar
