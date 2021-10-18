import { Avatar, HStack, VStack, Menu, MenuButton, Flex, Text } from '@chakra-ui/react';

export const AvatarBox = () => {
  return (
    <HStack
      spacing={{ base: '0', md: '6' }}
      mx="6"
      mb={{ base: '0', md: '4' }}
      mt={{ base: '0', md: '4' }}
      onClick={() => alert('Clicou!')}
    >
      <Flex>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack fontFamily="Montserrat">
              <Avatar
                showBorder={true}
                borderColor="var(--primary-color)"
                size="sm"
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <VStack alignItems="flex-start" spacing="1px">
                <Text
                  fontSize="sm"
                  color="var(--white-color)"
                  fontFamily="Montserrat"
                  _hover={{
                    color: 'var(--white-color)',
                    transition: '.9s',
                  }}
                >
                  Luana Moura
                </Text>
                <Text fontSize="xs" fontFamily="Montserrat" color="gray.600">
                  CEO in startup
                </Text>
              </VStack>
            </HStack>
          </MenuButton>
        </Menu>
      </Flex>
    </HStack>
  );
};
