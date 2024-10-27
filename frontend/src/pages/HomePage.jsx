import { Container, SimpleGrid, Text, VStack, Heading,Box } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import {useEffect} from 'react';
import { useProductStore } from '../store/product';
import ProductCard from "../components/ProductCard";



const HomePage = () => {
  const {fetchProducts, products} = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  console.log("products", products);
  
  return (
    <Container maxW='container.xl' py={12}>
      
      <VStack spacing={8}>
        <Text
          fontSize={"30px"}
          fontWeight={"bold"}
          bgGradient='linear(to-r, #7928CA, #FF0080)'
          bgClip='text'
          // bgGradient={"linear(to-r, cyan.400, blue.500"}
          // bgClip={"text"}
          textAlign={"center"}
        >
          Current Product📌
        </Text>
        {/* columns={2} spacingX='20px' spacingY='10px' */}
        <SimpleGrid
        columns={{
          base:1,
          md: 2,
          lg: 3
        }}
        spacing={10}
        w={"full"}
        >
        <Box bg='tomato' w='10%' p={4} color='white'>
            This is the Box
            {products.name}
        </Box>
          {products.map((product) => {
            <ProductCard key={product._id} product={product}/>
          })}         
        </SimpleGrid> 
        {products.length === 0 && (
          <Text>
          No products found😢{" "}
          <Link to={"/create"}>
          <Text as='span' color='blue.500' _hover={{textDecoration: "underline"}}>
            Create a product
          </Text>
          </Link>
        </Text>
        )}
        
      </VStack>
    </Container>
  )
}
export default HomePage




























