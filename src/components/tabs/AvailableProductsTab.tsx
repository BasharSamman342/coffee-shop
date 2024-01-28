import { SimpleGrid, Spinner } from "@chakra-ui/react";
import AvailableCoffees from "../../services/AvailableCoffees";
import CoffeeCard from "../Cards/CoffeeCard";

const AvailableProductsTab = () => {
  const { data, isLoading } = AvailableCoffees();

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

export default AvailableProductsTab;
