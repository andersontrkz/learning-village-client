import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  IconButton,
  Link,
  Button,
} from '@chakra-ui/react';
import { faMicrosoft, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useHistory } from 'react-router';

import Header from './Header';

type LoginFormProps = {
  setAction: (action: string) => void;
};

export default function LoginForm({ setAction }: LoginFormProps) {
  const history = useHistory();

  return (
    <>
      <Header title="ENTRAR NA SUA CONTA" subtitle="LOGIN" backtitle="LOGIN" />
      <FormControl id="email">
        <FormLabel fontSize="24px">E-mail</FormLabel>
        <Input
          mb="6"
          type="email"
          rounded="none"
          placeholder="email@learningvillage.com"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel fontSize="24px">Senha</FormLabel>
        <Input
          mb="4"
          type="password"
          rounded="none"
          placeholder="********"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <Link
        alignSelf="center"
        textColor="var(--primary-color)"
        textDecoration="underline"
        fontWeight="bold"
        fontFamily="Montserrat"
        fontSize="12px"
        _hover={{
          textColor: 'var(--primary-color-alt)',
        }}
        onClick={() => setAction('recovery')}
      >
        Esqueci minha senha
      </Link>
      <br />
      <Button
        bg={'var(--primary-color)'}
        textColor={'var(--white-color)'}
        rounded="none"
        rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
        width={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
        alignSelf="center"
        pt="4"
        pb="4"
        _hover={{
          bg: 'var(--primary-color-alt)',
          transition: '.9s',
        }}
        onClick={() => history.push('feed')}
      >
        ENTRAR
      </Button>
      <Text
        alignSelf="center"
        fontFamily="Montserrat"
        fontSize="16px"
        style={{ marginTop: '48px' }}
      >
        Ou fazer login com
      </Text>
      <Flex alignContent="center" justifyContent="center" style={{ marginTop: '24px' }}>
        <IconButton
          aria-label="Search database"
          icon={<FontAwesomeIcon icon={faMicrosoft} />}
          colorScheme="pink"
          variant="outline"
          borderRadius="50%"
          marginRight="2"
          _hover={{
            bg: 'var(--primary-color-alt)',
            color: 'var(--white-color)',
            transition: '.9s',
          }}
          onClick={() => alert('Clicou!')}
        />
        <IconButton
          aria-label="Search database"
          icon={<FontAwesomeIcon icon={faGooglePlusG} />}
          colorScheme="pink"
          variant="outline"
          borderRadius="50%"
          marginLeft="2"
          _hover={{
            bg: 'var(--primary-color-alt)',
            color: 'var(--white-color)',
            transition: '.9s',
          }}
          onClick={() => alert('Clicou!')}
        />
      </Flex>
    </>
  );
}
