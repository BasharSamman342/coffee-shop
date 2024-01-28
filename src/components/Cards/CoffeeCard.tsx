import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import { Coffee } from "../../hooks/useCoffees";
import ImageComponent from "../ImageComponent";
import Star from "../../assets/Star_fill.svg";

interface Props {
  coffee: Coffee;
}

const CoffeeCard = ({ coffee }: Props) => {
  return (
    <Card border={"solid"} borderWidth={2} borderColor={"gray"} padding={5}>
      <ImageComponent is_popular={coffee.is_popular} src={coffee.image_url} />
      <CardBody padding={0}>
        <Stack>
          <HStack mt="6" justifyContent={"space-between"}>
            <Heading size="sm">{coffee.name}</Heading>
            <Tag
              variant="solid"
              bg="teal"
              color="gray.100"
              paddingX={6}
              paddingY={2}
              borderRadius={10}
              whiteSpace={"nowrap"}
              textAlign={"left"}
            >
              $ {coffee.price}
            </Tag>
          </HStack>
          <HStack spacing={1} display={"flex"} alignItems={"center"}>
            <Image width={25} src={Star} />
            <HStack width={"100%"} display={"flex"} justify={"space-between"}>
              <Box display={"flex"} gap={1}>
                <Text>{coffee.rating}</Text>
                <Text color={"gray.300"}>( {coffee.votes} votes )</Text>
              </Box>
              {coffee.sold && (
                <Text marginRight={3} color="#ED735D" whiteSpace={"nowrap"}>
                  Sold Out
                </Text>
              )}
            </HStack>
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default CoffeeCard;
