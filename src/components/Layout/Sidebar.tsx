import { Box, Flex, useColorModeValue, BoxProps, Button, Image } from '@chakra-ui/react';
import { faCompass, faCommentAlt, faCalendarAlt } from '@fortawesome/free-regular-svg-icons';
import {
  faHome,
  faUsers,
  faChevronRight,
  faMapMarkerAlt,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/logos/logo.png';
import Context from '../../context/Global/Context';
import NavItem from '../Layout/NavItem';
import { AvatarBox } from '../Pages/Feed/AvatarBox';

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
  const { userData, removeCookie } = useContext(Context);

  const history = useHistory();

  const checkCurrentUrl = (route: string) => {
    const url = history.location.pathname.split('/')[1];

    if (url === route) {
      return 'var(--white-color)';
    }

    return 'none';
  };

  const exitApp = () => {
    removeCookie('credentials');
    history.push('/');
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
        <Image h="10" ml="10" src={logo} d={{ base: 'none', md: 'flex' }} />
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
          <AvatarBox data={userData.user} borderColor="var(--primary-color)" />
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
        onClick={exitApp}
      >
        SAIR
      </Button>
    </Box>
  );
}
