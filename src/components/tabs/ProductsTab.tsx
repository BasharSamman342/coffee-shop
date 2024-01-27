import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import AllProductTab from "./AllProductTab";
import AvailableProductsTab from "./AvailableProductsTab";

const ProductsTab = () => {
  return (
    <Tabs
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      flexDirection={"column"}
      variant="soft-rounded"
      colorScheme="green"
    >
      <TabList justifyContent={"center"}>
        <Tab paddingX={4}>All Prodducts</Tab>
        <Tab paddingX={4}>Available Products</Tab>
      </TabList>
      <TabPanels width={"100%"}>
        <TabPanel>
          <AllProductTab />
        </TabPanel>
        <TabPanel>
          <AvailableProductsTab />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default ProductsTab;
