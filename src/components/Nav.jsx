import { Box, Flex, Center } from "@chakra-ui/react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <Flex width="100vw" bg="orange.300">
      <Link to="./">
        <Center>今天吃什麼？</Center>
      </Link>
      <Box>
        <Link to="./profile">profile</Link>
        <Link to="./addplace">add</Link>
        <Link to="./list">list</Link>{" "}
      </Box>
    </Flex>
  );
};

export default Nav;
