import { IconButton, Flex, Text, FlexProps, Center } from '@chakra-ui/react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface MobileProps extends FlexProps {
  onOpen: () => void;
}

export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex pl="0" pr="4px" h="20" alignItems="center" boxShadow="base" {...rest}>
      <Center
        bg="var(--gray-color)"
        borderRight="4px"
        borderRightColor="var(--primary-color)"
        d={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
      >
        <IconButton
          aria-label="open menu"
          pl="8"
          bg="var(--gray-color)"
          icon={<FontAwesomeIcon icon={faBars} color="var(--primary-color)" />}
        />
        <Text color="var(--white-color)" ml="4" mr="4">
          MENU
        </Text>
      </Center>
      <Center
        w={{ base: '100%', md: '70%', lg: '60%' }}
        justifyContent={{ base: 'center', md: 'flex-end' }}
      >
        <Text fontSize="28px">Feed de notícias</Text>
      </Center>
    </Flex>
  );
};
