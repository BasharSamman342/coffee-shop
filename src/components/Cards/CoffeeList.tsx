import { SimpleGrid } from "@chakra-ui/react";
import CoffeeCard from "./CoffeeCard";

const CoffeeList = () => {
  return (
    <SimpleGrid columns={3} padding={"40px"} spacing={12}>
      <CoffeeCard />
      <CoffeeCard />
      <CoffeeCard />
    </SimpleGrid>
  );
};

export default CoffeeList;
