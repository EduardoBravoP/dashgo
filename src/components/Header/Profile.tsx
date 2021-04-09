import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Eduardo Bravo</Text>
        <Text color="gray.300" fontSize="sm">eduardo@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Eduardo Bravo" src="https://github.com/eduardobravop.png" />
    </Flex>
  )
}