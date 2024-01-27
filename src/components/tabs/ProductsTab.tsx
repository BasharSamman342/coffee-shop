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
      colorScheme="#00f"
    >
      <TabList justifyContent={"center"}>
        <Tab paddingX={4}>Tab 1</Tab>
        <Tab paddingX={4}>Tab 2</Tab>
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
