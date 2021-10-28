import { Avatar, HStack, VStack, Menu, MenuButton, Flex, Text } from '@chakra-ui/react';

interface AvatarBoxProps {
  data: any;
  avatarSize?: string;
  borderColor?: string;
}

export const AvatarBox = ({
  data,
  avatarSize = 'sm',
  borderColor = 'var(--white-color)',
}: AvatarBoxProps) => {
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
                src={data.profileImage}
              />
              <VStack alignItems="flex-start" spacing="-1">
                <Text
                  fontSize="sm"
                  color="var(--white-color)"
                  fontFamily="Montserrat"
                  fontWeight="bold"
                >
                  {data.name}
                </Text>
                <Text fontSize="xs" fontFamily="Montserrat" color="var(--white-color)">
                  {data.position}
                </Text>
              </VStack>
            </HStack>
          </MenuButton>
        </Menu>
      </Flex>
    </HStack>
  );
};
