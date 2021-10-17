import { Flex, Text, FormControl, FormLabel, Input, IconButton, Link } from '@chakra-ui/react';
import { faMicrosoft, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ActionButton from './ActionButton';
import LeftHeader from './LeftHeader';

type LoginFormProps = {
  setAction: (action: string) => void;
};

export default function LoginForm({ setAction }: LoginFormProps) {
  return (
    <>
      <LeftHeader title="ENTRAR NA SUA CONTA" subtitle="LOGIN" backtitle="LOGIN" />
      <FormControl id="email">
        <FormLabel>E-mail</FormLabel>
        <Input
          type="email"
          rounded="none"
          placeholder="email@learningvillage.com"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <FormControl id="password">
        <FormLabel>Senha</FormLabel>
        <Input
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
        _hover={{
          textColor: 'var(--primary-color-alt)',
        }}
        onClick={() => setAction('recovery')}
      >
        Esqueci minha senha
      </Link>
      <ActionButton action="ENTRAR" />
      <Text alignSelf="center">Ou fazer login com</Text>
      <Flex alignContent="center" justifyContent="center">
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
        />
      </Flex>
    </>
  );
}
