import { Center, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';

type RedefinitionFormFormProps = {
  setAction: (action: string) => void;
};

export default function RedefinitionForm({ setAction }: RedefinitionFormFormProps) {
  return (
    <>
      <Header
        title="CRIAR UMA NOVA SENHA"
        subtitle="Insira uma nova senha para acesso a plataforma"
        backtitle="LOGIN"
      />
      <FormControl id="password" style={{ marginBottom: '32px', marginTop: '20px' }}>
        <FormLabel fontSize="24px">Nova Senha</FormLabel>
        <Input
          type="password"
          rounded="none"
          placeholder="********"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <FormControl id="confirm_password" style={{ marginBottom: '32px', marginTop: '20px' }}>
        <FormLabel fontSize="24px">Confirme a nova senha</FormLabel>
        <Input
          type="password"
          rounded="none"
          placeholder="********"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <Center style={{ marginBottom: '64px' }}>
        <Button
          bg={'var(--primary-color)'}
          textColor={'var(--white-color)'}
          rounded="none"
          rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
          width={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
          alignSelf="center"
          pt="6"
          pb="6"
          _hover={{
            bg: 'var(--primary-color-alt)',
            transition: '.9s',
          }}
          onClick={() => setAction('login')}
        >
          REDEFINIR A SENHA
        </Button>
      </Center>
    </>
  );
}
