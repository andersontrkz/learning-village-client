import { Box, Flex, Progress, Text } from '@chakra-ui/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AlertProps = {
  text: string;
};

export default function Alert({ text }: AlertProps) {
  return (
    <Box position="fixed" top="0">
      <Flex direction="column" w="100vw" alignItems="center" mt="8">
        <Flex
          w={{ base: '70%', md: '50%' }}
          wrap="wrap"
          alignItems="center"
          boxShadow="base"
          bg="var(--white-color)"
        >
          <Flex bg="var(--light-gray-color)" justify="center" alignItems="center" p="16px" mr="4">
            <FontAwesomeIcon icon={faCheck} />
          </Flex>
          <Text pr="8">{text}</Text>
          <Progress size="xs" isIndeterminate width="100%" colorScheme="pink" />
        </Flex>
      </Flex>
    </Box>
  );
}
