import { Avatar, HStack, VStack, Menu, MenuButton, Flex, Text } from '@chakra-ui/react';

export const AvatarBox = ({ avatarSize = 'sm', borderColor = 'var(--white-color)' }) => {
  return (
    <HStack onClick={() => alert('Clicou!')}>
      <Flex>
        <Menu>
          <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}>
            <HStack fontFamily="Montserrat">
              <Avatar
                showBorder={true}
                borderColor={borderColor}
                size={avatarSize}
                src={
                  'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                }
              />
              <VStack alignItems="flex-start" spacing="-1">
                <Text
                  fontSize="sm"
                  color="var(--white-color)"
                  fontFamily="Montserrat"
                  fontWeight="bold"
                >
                  Luana Moura
                </Text>
                <Text fontSize="xs" fontFamily="Montserrat" color="var(--white-color)">
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
