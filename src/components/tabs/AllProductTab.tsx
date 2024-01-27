import { SimpleGrid, Spinner } from "@chakra-ui/react";
import CoffeeCard from "../Cards/CoffeeCard";
import coffees from "../../services/CoffeeService";

const AllProductTab = () => {
  const { data, isLoading } = coffees();

  return (
    <SimpleGrid columns={3} padding={5} spacing={20}>
      {isLoading && <Spinner />}
      {data?.map((coffee) => {
        return <CoffeeCard coffee={coffee} />;
      })}
    </SimpleGrid>
  );
};

export default AllProductTab;
