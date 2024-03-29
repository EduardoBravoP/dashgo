import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Eduardo Bravo</Text>
          <Text color="gray.300" fontSize="sm">eduardo@gmail.com</Text>
        </Box>
      ) }

      <Avatar size="md" name="Eduardo Bravo" src="https://github.com/eduardobravop.png" />
    </Flex>
  )
}