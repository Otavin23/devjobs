import {
  Flex,
  Container,
  Box,
  Image,
  Button,
  Heading,
  Text,
  UnorderedList,
  OrderedList,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import { Header } from "../../components/header";
import { useParams, Link } from "react-router-dom";
import dataJson from "../../utils/data.json";

const CompanyInformation = () => {
  const bgContent = useColorModeValue("#fff", "#19202d");
  const color = useColorModeValue("#000", "#fff");
  const button = useColorModeValue("#EFEFF9", "#303642");

  const { id } = useParams();

  const companyFilter = dataJson.filter((company) => {
    return company.id === Number(id);
  });

  return (
    <>
      <Header />

      <Flex as="main" justify="center" my="2.5rem" h="">
        <Container w="95%" maxW="850px" h="100%">
          <Flex
            as="section"
            h={{ base: "100%", lg: "150px", md: "150px", sm: "100%" }}
            justify="space-between"
            bg={bgContent}
            borderRadius="0.5rem 0.5rem 0.5rem 0.5rem"
            pos="relative"
            direction={{
              base: "column",
              lg: "row",
              md: "row",
              sm: "column",
            }}
            align={{
              base: "center",
              lg: "normal",
              md: "normal",
              sm: "center",
            }}
          >
            <Flex
              as="div"
              justify="center"
              align="center"
              bg={companyFilter[0].logoBackground}
              w={{ base: "70px", lg: "190px", md: "190px", sm: "70px" }}
              h={{ base: "70px", lg: "100%", md: "100%", sm: "70px" }}
              borderBottomLeftRadius={{
                base: "0",
                lg: "0.5rem",
                md: "0.5rem",
                sm: "0",
              }}
              borderRadius={{
                base: "1rem",
                lg: "0 0 0 0.5rem",
                md: "0 0 0 0.5rem",
                sm: "1rem",
              }}
              pos={{
                base: "absolute",
                lg: "relative",
                md: "relative",
                sm: "absolute",
              }}
              top={{ base: "-30px", lg: "0", md: "0", sm: "-30px" }}
            >
              <Image
                src={"." + companyFilter[0].logo}
                alt=""
                w={{ base: "50px", lg: "90px", md: "90px", sm: "50px" }}
              />
            </Flex>

            <Flex
              as="div"
              w="100%"
              justify="space-between"
              direction={{ base: "column", lg: "row", md: "row", sm: "column" }}
              align="center"
              p="3rem"
            >
              <Box as="div" mt={{ base: "2rem", lg: "0", md: "0", sm: "2rem" }}>
                <Heading
                  color={color}
                  fontWeight="800"
                  fontSize="25px"
                  mb="0.5rem"
                  textAlign={{
                    base: "center",
                    lg: "start",
                    md: "start",
                    sm: "center",
                  }}
                >
                  {companyFilter[0].company}
                </Heading>
                <Text
                  as="span"
                  color="#6e8098"
                  opacity="0.9"
                  fontSize="17px"
                  fontWeight="400"
                >
                  {companyFilter[0].website}
                </Text>
              </Box>

              <Link to={companyFilter[0].website} target="_blank">
                <Button
                  bg={button}
                  color={color}
                  fontWeight="700"
                  px="1.5rem"
                  py="1rem"
                  borderRadius="0.3rem"
                  mt={{ base: "2.5rem", lg: "0", md: "0", sm: "2.5rem" }}
                >
                  Company Site
                </Button>
              </Link>
            </Flex>
          </Flex>

          <Box
            as="section"
            bg={bgContent}
            mt="2.5rem"
            p={{ base: "1.5rem", lg: "3rem", md: "3rem", sm: "2rem" }}
            borderRadius="0.5rem"
          >
            <Text as="span" color="#74777C" opacity="0.8">
              {companyFilter[0].postedAt} &bull; {companyFilter[0].contract}
            </Text>

            <Flex
              as="div"
              justify="space-between"
              direction={{
                base: "column",
                lg: "row",
                md: "row",
                sm: "column",
              }}
              align={{ base: "start", lg: "center", md: "center", sm: "start" }}
              my={{ base: "2rem", lg: "0", md: "0", sm: "2rem" }}
            >
              <Heading
                as="h1"
                color={color}
                fontWeight="800"
                fontSize="clamp(20px, 2vw, 30px)"
              >
                {companyFilter[0].position}
              </Heading>

              <Box
                as="a"
                href={companyFilter[0].apply}
                target="_blank"
                w={{ base: "100%", lg: "auto", md: "auto", sm: "100%" }}
              >
                <Button
                  bg="#5765E2"
                  border="1px solid #5F67B2"
                  color="#fff"
                  fontWeight="700"
                  py="0.9rem"
                  px="2rem"
                  borderRadius="0.3rem"
                  fontSize="17px"
                  w={{ base: "100%", lg: "auto", md: "auto", sm: "100%" }}
                  mt={{ base: "2rem", lg: "0", md: "0", sm: "2rem" }}
                >
                  Apply Now
                </Button>
              </Box>
            </Flex>

            <Text as="span" fontWeight="700" color="#5964e0">
              {companyFilter[0].location}
            </Text>

            <Text mt="2.5rem" color="#6e8098" opacity="0.9" fontSize="18px">
              {companyFilter[0].description}
            </Text>

            <Heading
              color={color}
              fontWeight="800"
              fontSize="23px"
              mt="2.5rem"
              mb="1.5rem"
            >
              Requirements
            </Heading>

            <Text color="#6e8098" opacity="0.9" fontSize="18px">
              {companyFilter[0].requirements.content}
            </Text>

            <UnorderedList m="1.5rem 0 0 0" listStyleType="none">
              {companyFilter[0].requirements.items.map(
                (companyDescriptionn) => (
                  <ListItem
                    display="flex"
                    alignItems="start"
                    _before={{
                      content: `url(../assets/ball.png)`,
                    }}
                    mt="1rem"
                  >
                    <Text
                      ml="2rem"
                      maxW="800px"
                      color="#6e8098"
                      opacity="0.9"
                      fontSize="18px"
                    >
                      {companyDescriptionn}
                    </Text>
                  </ListItem>
                )
              )}
            </UnorderedList>

            <Heading
              color={color}
              fontWeight="800"
              fontSize="23px"
              mt="2.5rem"
              mb="1.5rem"
            >
              What you Will Do
            </Heading>

            <Text color="#6e8098" opacity="0.9" fontSize="18px">
              {companyFilter[0].role.content}
            </Text>

            <OrderedList m="1.5rem 0 0 1rem">
              {companyFilter[0].role.items.map((companyRole) => (
                <ListItem
                  mt="1rem"
                  color="#5255B2"
                  fontWeight="700"
                  fontSize="18px"
                >
                  <Text
                    ml="1rem"
                    maxW="800px"
                    color="#6e8098"
                    opacity="0.9"
                    fontSize="18px"
                    fontWeight="400"
                  >
                    {companyRole}
                  </Text>
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        </Container>
      </Flex>

      <Flex as="footer" justify="center" bg={bgContent} mt="6rem" py="2rem">
        <Container
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          w="95%"
          maxW="850px"
          h="100%"
        >
          <Flex
            as="div"
            direction="column"
            display={{ base: "none", lg: "flex", md: "flex", sm: "none" }}
          >
            <Heading
              as="h3"
              color={color}
              fontWeight="800"
              fontSize="22px"
              mb="0.5rem"
            >
              {companyFilter[0].position}
            </Heading>
            <Text
              as="span"
              color="#74777C"
              opacity="0.8"
              fontSize="17px"
              fontWeight="400"
            >
              {companyFilter[0].company}
            </Text>
          </Flex>
          <Button
            px="1.7rem"
            py="1rem"
            borderRadius="0.5rem"
            bg="#5964E0"
            border="1px solid #5E64C6"
            color="#fff"
            fontWeight="600"
            w={{ base: "100%", lg: "auto", md: "auto", sm: "100%" }}
          >
            Apply Now
          </Button>
        </Container>
      </Flex>
    </>
  );
};
export { CompanyInformation };
