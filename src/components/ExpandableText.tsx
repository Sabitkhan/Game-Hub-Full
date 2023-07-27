import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}
const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  if (children.length <= limit) return <Text>{children}</Text>;
  const summery = expanded ? children : children.substring(0, limit) + "...";

  return (
    <div>
      <Text>
        {summery}
        <Button
          size={"xs"}
          colorScheme={"yellow"}
          marginLeft={1}
          fontWeight={"bold"}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show Less" : "Read More"}
        </Button>
      </Text>
    </div>
  );
};

export default ExpandableText;
