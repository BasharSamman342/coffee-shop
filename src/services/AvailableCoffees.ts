import Coffees from "../data/coffee";
const AvailableCoffees = () => {
  const availableCoffee = Coffees.filter((item) => {
    return item.is_available == true;
  });
  return { data: availableCoffee, isLoading: false, error: null };
};
export default AvailableCoffees;
