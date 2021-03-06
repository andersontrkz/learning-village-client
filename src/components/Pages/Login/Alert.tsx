import { Flex, Progress, Text } from '@chakra-ui/react';
import { faCheck, faInfo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type AlertProps = {
  text: string;
  type?: string;
};

export default function Alert({ type, text }: AlertProps) {
  return (
    <Flex position="fixed" top="0" left="0" w="100vw">
      <Flex direction="column" w="100vw" alignItems="center" mt="8">
        <Flex
          w={{ base: '70%', md: '50%' }}
          wrap="wrap"
          alignItems="center"
          boxShadow="base"
          bg="var(--white-color)"
        >
          <Flex bg="var(--light-gray-color)" justify="center" alignItems="center" p="16px" mr="4">
            <FontAwesomeIcon icon={type === 'info' ? faInfo : faCheck} />
          </Flex>
          <Text pr="8">{text}</Text>
          <Progress size="xs" isIndeterminate width="100%" colorScheme="pink" />
        </Flex>
      </Flex>
    </Flex>
  );
}
