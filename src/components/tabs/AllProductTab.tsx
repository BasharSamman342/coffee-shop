import { SimpleGrid, Spinner } from "@chakra-ui/react";
import CoffeeCard from "../Cards/CoffeeCard";
import coffees from "../../services/CoffeeService";

const AllProductTab = () => {
  const { data, isLoading } = coffees();

  return (
    <SimpleGrid
      columns={{
        sm: 1,
        md: 2,
        lg: 3,
        xl: 3,
      }}
      padding={5}
      spacing={6}
    >
      {isLoading && <Spinner />}
      {data?.map((coffee) => {
        return <CoffeeCard key={coffee.id} coffee={coffee} />;
      })}
    </SimpleGrid>
  );
};

export default AllProductTab;
