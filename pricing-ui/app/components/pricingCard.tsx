import { Box,Text, Button, Flex, Heading, HStack, Icon } from "@chakra-ui/react";
import Circle from "../assets/circle";

export default function PricingCard() {
  return (
    <>
      <Box
        mt="-150px"
        maxW="950px"
        mx={['22px','30px','auto']}
        bg="white"
        borderRadius={"12px"}
        overflow="hidden"
        boxShadow={"2xl"}
      >
        <Flex flexDirection={['column','column','row']}>
          <Box bg="#E5E5E5" py={['40px','50px',"60px"]} textAlign={"center"} width={['auto','auto','378px']}>
            <Heading fontSize={"24px"} fontWeight={"800"}>
              Premium PRO
            </Heading>
            <Text fontSize={['48px','52px',"60px"]} fontWeight={"800"}>
              $329
            </Text>
            <Text fontSize={"18px"} fontWeight={"500"}>
              billed just once
            </Text>
            <Button colorScheme={"purple"} size="lg" maxW="282px" mt="24px" px='75px'>
              Get Started
            </Button>
          </Box>
          <Box fontSize={"18px"} textAlign="left" p={['20px','30px',"48px"]} fontWeight="400">
            <Text pb={"4"}>
              Access these features when you get this pricing package for your
              business.
            </Text>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text pl='15px'>International calling and messaging API</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text pl='15px'>Additional phone numbers</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text pl='15px'>Automated messages via Zapier</Text>
            </HStack>
            <HStack pb="2">
              <Icon as={Circle} />
              <Text pl='15px'>24/7 support and consulting</Text>
            </HStack>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
