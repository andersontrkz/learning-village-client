import { Flex, Center, FormControl, FormLabel, Input, Link, Text, Button } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';

type RecoveryFormProps = {
  setAction: (action: string) => void;
};

export default function RecoveryForm({ setAction }: RecoveryFormProps) {
  return (
    <>
      <Header title="REDEFINIR A SENHA" subtitle="E-MAIL" backtitle="SENHA" />
      <Text textAlign="center" fontSize="13px" fontFamily="Montserrat">
        Insira seu e-mail cadastrado na plataforma. Enviaremos um código para seu e-mail para a
        redefinição de senha.
      </Text>
      <FormControl id="email" mt="20px" mb="32px">
        <FormLabel fontSize="24px">E-mail</FormLabel>
        <Input
          type="email"
          rounded="none"
          placeholder="email@learningvillage.com"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <Center mb="64px">
        <Button
          bg={'var(--primary-color)'}
          color={'var(--white-color)'}
          rounded="none"
          rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
          w={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
          alignSelf="center"
          py="6"
          _hover={{
            bg: 'var(--primary-color-alt)',
            transition: '.9s',
          }}
          onClick={() => setAction('confirm')}
        >
          REDEFINIR A SENHA
        </Button>
      </Center>
      <Flex justify="center">
        <Link
          alignSelf="center"
          color="var(--primary-color)"
          textDecoration="underline"
          fontWeight="bold"
          fontFamily="Montserrat"
          fontSize="12px"
          _hover={{
            color: 'var(--primary-color-alt)',
          }}
          onClick={() => setAction('login')}
        >
          Voltar ao login
        </Link>
      </Flex>
    </>
  );
}
