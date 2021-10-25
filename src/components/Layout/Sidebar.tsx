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

import { AvatarBox } from '../Pages/Feed/AvatarBox';
import NavItem from '../Pages/Feed/NavItem';

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

interface LinkItemProps {
  route: string;
  name: string;
  icon: any;
}

const LinkItems: Array<LinkItemProps> = [
  { name: 'SUA EMPRESA', icon: faHome, route: 'sua-empresa' },
  { name: 'COMUNIDADE', icon: faUsers, route: 'comunidadee' },
  { name: 'FEED', icon: faCompass, route: 'feed' },
  { name: 'ESPAÇOS', icon: faMapMarkerAlt, route: 'espacos' },
  { name: 'EVENTOS', icon: faCalendarAlt, route: 'eventos' },
  { name: 'ESPAÇO AJUDA', icon: faCommentAlt, route: 'espaco-ajuda' },
];

export default function Sidebar({ onClose, ...rest }: SidebarProps) {
  const history = useHistory();

  const checkCurrentUrl = (route: string) => {
    const url = history.location.pathname.split('/')[1];

    if (url === route) {
      return 'var(--white-color)';
    }

    return 'none';
  };

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
      <Flex h="20" alignItems="center" mx="10" justify="space-between">
        <Text
          fontSize="2xl"
          fontFamily="monospace"
          fontWeight="bold"
          color="var(--white-color)"
          d={{ base: 'none', md: 'flex' }}
        >
          Learning Village
        </Text>
        <Box d={{ base: 'flex', md: 'none' }} onClick={onClose}>
          <FontAwesomeIcon icon={faTimes} size="lg" />
        </Box>
      </Flex>
      <Flex flexDirection={{ base: 'column-reverse', md: 'column' }}>
        <Box>
          {LinkItems.map(({ name, icon, route }) => (
            <NavItem key={name} icon={icon} name={name} color={checkCurrentUrl(route)} />
          ))}
        </Box>
        <Box s={{ base: 0, md: 6 }} mx="6" mb={{ base: 0, md: 4 }} mt={{ base: 0, md: 4 }}>
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
        mt={{ base: '48px', md: 0 }}
        mx="6"
        py="4"
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
