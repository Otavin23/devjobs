import { Flex, Container, Box, Text, Image } from "@chakra-ui/react";
import "../../styles/inputTheme.css";
import { useColorMode } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Header = () => {
  const { toggleColorMode } = useColorMode();

  return (
    <>
      <Box
        as="div"
        pos="absolute"
        left="-1px"
        w="100%"
        h="300px"
        top="-120px"
        bgRepeat="no-repeat"
        bgImage="url(../assets/desktop/bg-pattern-header.svg)"
        bgSize="COVER"
        zIndex="-1"
      ></Box>

      <Flex as="header" justify="center" pt="3rem">
        <Container
          display="Flex"
          justifyContent="space-between"
          w="95%"
          maxW="1300px"
          h="100%"
        >
          <Link to="/">
            <Text as="span">
              <Image src="../assets/desktop/logo.svg" alt="" w="150px" />
            </Text>
          </Link>

          <Flex as="div" align="center">
            <Image
              src="../assets/desktop/icon-sun.svg"
              alt=""
              w="20px"
              h="20px"
              mr="1rem"
            />

            <Box as="label" className="label__checkTheme">
              <input type="checkbox" className="input__checkbox" />
              <span className="check" onClick={toggleColorMode}></span>
            </Box>

            <Image
              src="../assets/desktop/icon-moon.svg"
              alt=""
              w="20px"
              h="20px"
              ml="1rem"
            />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export { Header };
