import {
  Card,
  CardBody,
  Divider,
  HStack,
  Heading,
  Tag,
} from "@chakra-ui/react";
import { Coffee } from "../../hooks/useCoffees";
import ImageComponent from "../ImageComponent";

interface Props {
  coffee: Coffee;
}

const CoffeeCard = ({ coffee }: Props) => {
  return (
    <Card border={"solid"} borderWidth={2} borderColor={"gray"} padding={10}>
      <ImageComponent is_popular={coffee.is_popular} src={coffee.image_url} />
      <CardBody>
        <HStack mt="6" justifyContent={"space-between"}>
          <Heading size="md">{coffee.name}</Heading>
          <Tag
            variant="solid"
            bg="teal"
            color="gray.100"
            paddingX={6}
            paddingY={2}
            borderRadius={10}
          >
            ${coffee.price}
          </Tag>
        </HStack>
      </CardBody>
      <Divider />
    </Card>
  );
};

export default CoffeeCard;
