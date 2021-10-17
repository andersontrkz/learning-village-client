import { Flex, Center, FormControl, FormLabel, Input, Link, Text } from '@chakra-ui/react';

import ActionButton from './ActionButton';
import LeftHeader from './LeftHeader';

type RecoveryFormProps = {
  setAction: (action: string) => void;
};

export default function RecoveryForm({ setAction }: RecoveryFormProps) {
  return (
    <>
      <LeftHeader title="REDEFINIR A SENHA" subtitle="E-MAIL" backtitle="SENHA" />
      <Text textAlign="center" fontSize="13px" fontFamily="Montserrat">
        Insira seu e-mail cadastrado na plataforma. Enviaremos um código para seu e-mail para a
        redefinição de senha.
      </Text>
      <FormControl id="email" style={{ marginBottom: '32px', marginTop: '20px' }}>
        <FormLabel fontSize="24px">E-mail</FormLabel>
        <Input
          type="email"
          rounded="none"
          placeholder="email@learningvillage.com"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <Center style={{ marginBottom: '64px' }}>
        <ActionButton action="REDEFINIR A SENHA" />
      </Center>
      <Flex alignContent="center" justifyContent="center">
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
          onClick={() => setAction('login')}
        >
          Voltar ao login
        </Link>
      </Flex>
    </>
  );
}
