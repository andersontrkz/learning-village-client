import { Box, Flex, useColorModeValue, Text, BoxProps, Button } from '@chakra-ui/react';
import { faCompass, faCommentAlt, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faUsers,
  faChevronRight,
  faMapMarkerAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router-dom';

import { AvatarBox } from './AvatarBox';
import NavItem from './NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  name: string;
  icon: any;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'SUA EMPRESA', icon: faHome },
  { name: 'COMUNIDADE', icon: faUsers },
  { name: 'FEED', icon: faCompass },
  { name: 'ESPAÇOS', icon: faMapMarkerAlt },
  { name: 'EVENTOS', icon: faCalendarAlt },
  { name: 'ESPAÇO AJUDA', icon: faCommentAlt },
];

export default function Sidebar({ onClose, ...rest }: SidebarProps) {
  const history = useHistory();

  return (
    <Box
      transition="3s ease"
      bg="#000"
      color="var(--white-color-alt)"
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="20" alignItems="center" mx="10" justifyContent="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="var(--white-color)"
          display={{ base: 'none', md: 'flex' }}
        >
          Learning Village
        </Text>
        <Box display={{ base: 'flex', md: 'none' }} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Box>
      </Flex>
      <Flex flexDirection={{ base: 'column-reverse', md: 'column' }}>
        <Box>
          {LinkItems.map((link) => (
            <NavItem key={link.name} icon={link.icon} name={link.name} />
          ))}
        </Box>
        <Box
          s={{ base: '0', md: '6' }}
          mx="6"
          mb={{ base: '0', md: '4' }}
          mt={{ base: '0', md: '4' }}
        >
          <AvatarBox borderColor="var(--primary-color)" />
        </Box>
      </Flex>
      <Button
        bg={'var(--primary-color)'}
        textColor={'var(--white-color)'}
        rounded="none"
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
        width="50%"
        alignSelf="center"
        mt={{ base: '48px', md: '0' }}
        mx="6"
        pt="4"
        pb="4"
        iconSpacing="auto"
        _hover={{
          bg: 'var(--primary-color-alt)',
          transition: '.9s',
        }}
        onClick={() => history.push('')}
      >
        SAIR
      </Button>
    </Box>
  );
}
