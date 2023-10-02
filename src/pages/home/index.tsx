import {
  Flex,
  Container,
  Image,
  Input,
  Button,
  UnorderedList,
  ListItem,
  Text,
  Heading,
  useColorModeValue,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import dataJson from "../../utils/data.json";
import { Link } from "react-router-dom";
import { useState } from "react";

const Home = () => {
  const bgContent = useColorModeValue("#fff", "#19202d");
  const color = useColorModeValue("#000", "#fff");
  const border = useColorModeValue("#E8E8E8", "#484848");

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [search, setSearch] = useState({
    input: "",
    region: "",
    fullTime: false,
  });

  const filterData = dataJson.filter((company) => {
    if (search.fullTime) {
      if (
        company.position.toLowerCase().includes(search.input.toLowerCase()) &&
        company.location.toLowerCase().includes(search.region.toLowerCase())
      ) {
        return company.contract === "Full Time";
      }
    }
    if (
      company.position.toLowerCase().includes(search.input.toLowerCase()) &&
      company.location.toLowerCase().includes(search.region.toLowerCase())
    ) {
      return company.contract;
    }
  });

  return (
    <>
      <Header />

      <Flex as="main" justify="center" mt="3rem">
        <Container w="95%" maxW="1300px" h="100%">
          <Flex
            as="nav"
            justify="space-between"
            bg={bgContent}
            w="100%"
            h="80px"
            borderRadius="0.5rem"
          >
            <Flex as="div" w="100%">
              <Flex
                as="div"
                align="center"
                w={{ base: "100%", lg: "55%", md: "55%", sm: "100%" }}
                pl="2rem"
                borderRight={{
                  base: `1px solid transaprent`,
                  lg: `1px solid ${border}`,
                  md: `1px solid ${border}`,
                  sm: `1px solid transaprent`,
                }}
              >
                <Image
                  src="../assets/desktop/icon-search.svg"
                  alt=""
                  w="25px"
                  h="25px"
                />
                <Input
                  h="100%"
                  w="100%"
                  type="text"
                  placeholder="Filter by title, companies, expertise..."
                  border="none"
                  pl="1rem"
                  fontWeight="500"
                  color="#8E8E8E"
                  _placeholder={{
                    fontWeight: "500",
                    opacity: "0.8",
                    fontSize: "clamp(14px, 1vw, 17px)",
                    whiteSpace: "nowrap",
                    textOverflow: "ellipsis",
                    overflow: "hidden",
                  }}
                  maxW={{
                    base: "100%",
                    lg: "300px",
                    md: "100px",
                    sm: "100%",
                  }}
                  onChange={({ target }) =>
                    setSearch({ ...search, input: target.value })
                  }
                />
              </Flex>

              <Flex
                as="div"
                align="center"
                w="45%"
                px="2rem"
                borderRight={`1px solid ${border}`}
                display={{ base: "none", lg: "flex", md: "flex", sm: "none" }}
              >
                <Image
                  src="../assets/desktop/icon-location.svg"
                  alt=""
                  w="20px"
                  h="25px"
                />
                <Input
                  type="text"
                  placeholder="Filter by location..."
                  h="100%"
                  w="100%"
                  border="none"
                  pl="1rem"
                  fontWeight="600"
                  color="#8E8E8E"
                  _placeholder={{
                    fontWeight: "500",
                    opacity: "0.8",
                    fontSize: "17px",
                  }}
                  onChange={({ target }) =>
                    setSearch({ ...search, region: target.value })
                  }
                />
              </Flex>
            </Flex>

            <Flex as="div" align="center" p="1.5rem" h="100%">
              <Flex
                as="label"
                align="center"
                w="150px"
                color={color}
                fontWeight="700"
                display={{ base: "none", lg: "flex", md: "flex", sm: "none" }}
              >
                <input
                  type="checkbox"
                  onChange={() =>
                    setSearch({ ...search, fullTime: !search.fullTime })
                  }
                  style={{
                    width: "25px",
                    height: "25px",
                    cursor: "pointer",
                    marginRight: "1rem",
                  }}
                />
                Full Time Only
              </Flex>

              <Button
                onClick={onOpen}
                bg="transaprent"
                display={{ base: "flex", lg: "none", md: "none", sm: "flex" }}
              >
                <Image src="../assets/mobile/icon-filter.svg" alt="" w="35px" />
              </Button>

              <Modal
                closeOnOverlayClick={false}
                isOpen={isOpen}
                onClose={onClose}
                isCentered
              >
                <ModalOverlay />
                <ModalContent w="95%" borderRadius="0.5rem">
                  <ModalBody pb={6}>
                    <Flex
                      as="div"
                      align="center"
                      w="100%"
                      h="80px"
                      borderBottom="1px solid #E8E8E8"
                      px="2rem"
                    >
                      <Image
                        src="../assets/desktop/icon-location.svg"
                        alt=""
                        w="20px"
                        h="25px"
                      />
                      <Input
                        type="text"
                        placeholder="Filter by location..."
                        h="100%"
                        w="100%"
                        border="none"
                        pl="1rem"
                        fontWeight="400"
                        color="#8E8E8E"
                        _placeholder={{
                          opacity: "0.8",
                          fontSize: "17px",
                        }}
                        onChange={({ target }) =>
                          setSearch({ ...search, region: target.value })
                        }
                      />
                    </Flex>

                    <Flex
                      as="label"
                      align="center"
                      px="2rem"
                      my="2.5rem"
                      color={color}
                      fontWeight="700"
                    >
                      <input
                        type="checkbox"
                        onChange={() =>
                          setSearch({ ...search, fullTime: !search.fullTime })
                        }
                        style={{
                          width: "25px",
                          height: "25px",
                          cursor: "pointer",
                          marginRight: "1rem",
                        }}
                      />
                      Full Time Only
                    </Flex>
                  </ModalBody>

                  <ModalFooter>
                    <Button
                      onClick={onClose}
                      h="100%"
                      bg="#5964e0"
                      border="1px solid #5F67B2"
                      color="#fff"
                      fontWeight="600"
                      py="1rem"
                      borderRadius="0.4rem"
                      mx="1rem"
                      mb="1rem"
                      fontSize="20px"
                      w="100%"
                      mt="2rem"
                    >
                      Search
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>

              <Button
                h="100%"
                bg="#5964e0"
                border="1px solid #5F67B2"
                color="#fff"
                fontWeight="600"
                px={{ base: "0.7rem", lg: "2rem", md: "2rem", sm: "0.7rem" }}
                py="1.5rem"
                borderRadius="0.4rem"
                ml="1.5rem"
                fontSize={{ base: "0px", lg: "18px", md: "18px", sm: "0px" }}
              >
                <Image
                  src="../assets/mobile/icon-search.svg"
                  alt=""
                  w="40px"
                  h="20px"
                  display={{
                    base: "block",
                    lg: "none",
                    md: "none",
                    sm: "block",
                  }}
                />
                Search
              </Button>
            </Flex>
          </Flex>

          <Flex as="nav" mt="5rem">
            <UnorderedList
              listStyleType="none"
              display="flex"
              justifyContent="space-between"
              flexDirection={{ lg: "row", md: "row", sm: "column" }}
              w="100%"
              flexWrap="wrap"
              m="0"
            >
              {filterData.map((company) => (
                <ListItem
                  key={company.id}
                  bg={bgContent}
                  w={{ base: "100%", lg: "400px", md: "320px", sm: "100%" }}
                  p="1.5rem"
                  borderRadius="0.6rem"
                  pos="relative"
                  mb="4rem"
                >
                  <Link to={`information/${company.id}`}>
                    <Flex
                      align="center"
                      justify="center"
                      as="div"
                      pos="absolute"
                      top="-25px"
                      bg={company.logoBackground}
                      w="50px"
                      h="50px"
                      borderRadius="1rem"
                    >
                      <Image src={company.logo} alt="" />
                    </Flex>

                    <Text mt="1.5rem" color="#6e8098;" opacity="0.9">
                      {company.postedAt} &bull; {company.contract}
                    </Text>

                    <Heading
                      as="h3"
                      mt="0.8rem"
                      mb="0.8rem"
                      color={color}
                      fontWeight="700"
                      fontSize="clamp(16px, 1vw, 20px)"
                      cursor="pointer"
                      transition="0.3s"
                      _hover={{
                        color: "#6628ca",
                      }}
                    >
                      {company.position}
                    </Heading>

                    <Text color="#6e8098;" opacity="0.9">
                      {company.company}
                    </Text>

                    <Text mt="2rem" fontWeight="700" color="#5964e0">
                      {company.location}
                    </Text>
                  </Link>
                </ListItem>
              ))}
            </UnorderedList>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
export { Home };
