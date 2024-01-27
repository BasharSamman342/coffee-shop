import { useQuery } from "react-query";
import ApiClient from "../services/apiClient";

export interface Coffee {
  _id: string;
  id: number;
  name: string;
  description: string;
  price: number;
  region: string;
  weight: number;
  flavor_profile: string[];
  grind_option: string[];
  roast_level: number;
  image_url: string;
  is_popular: boolean;
}

const apiClient = new ApiClient<Coffee>("/api");

const useCoffees = () => {
  return useQuery<Coffee[], Error>({
    queryKey: "coffees",
    queryFn: apiClient.getAll,
    staleTime: 10 * 1000,
  });
};

export default useCoffees;
