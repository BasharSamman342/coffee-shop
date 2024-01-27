import { Box, Heading, Text } from '@chakra-ui/react'
import './App.css'
import Layout from './components/layout/Layout'
import ProductsTab from './components/tabs/ProductsTab'

function App() {

  return (
     <Layout>
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
        <Heading fontWeight={'bold'} fontSize={'28px'} as='h1' marginY={5} size='4xl'>Our Collection</Heading>
        <Text className='text-gray-400 text-center' width={"40%"}>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly</Text>
        <ProductsTab />
      </Box>
     </Layout>
  )
}

export default App
