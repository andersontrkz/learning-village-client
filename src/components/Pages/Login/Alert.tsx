import { Flex, Progress, Text } from '@chakra-ui/react';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Alert() {
  return (
    <Flex direction="column" width="100vw" alignItems="center" mt="8">
      <Flex width={{ base: '70%', md: '50%' }} wrap="wrap" alignItems="center" boxShadow="base">
        <Flex
          backgroundColor="#F0F0F4"
          justifyContent="center"
          alignItems="center"
          padding="16px"
          mr="4"
        >
          <FontAwesomeIcon icon={faCheck} />
        </Flex>
        <Text pr="8">SENHA REDEFINIDA COM SUCESSO</Text>
        <Progress size="xs" isIndeterminate width="100%" colorScheme="pink" />
      </Flex>
    </Flex>
  );
}
