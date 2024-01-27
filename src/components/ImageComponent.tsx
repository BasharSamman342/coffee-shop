import { Badge, Image } from "@chakra-ui/react";

interface Props {
  src: string;
  is_popular: boolean;
}
const ImageComponent = ({ src, is_popular }: Props) => {
  return (
    <>
      {is_popular && (
        <Badge
          paddingX={2}
          paddingY={1}
          borderRadius={10}
          position={"absolute"}
          bg="#F6C768"
          color={"black"}
        >
          Popular
        </Badge>
      )}
      <Image
        borderRadius={10}
        src={src}
        alt="Green double couch with wooden legs"
      />
    </>
  );
};

export default ImageComponent;
