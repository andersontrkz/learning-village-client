import { Center, FormControl, FormLabel, Input, Button } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';

type RedefinitionFormFormProps = {
  setAction: (action: string) => void;
};

export default function RedefinitionForm({ setAction }: RedefinitionFormFormProps) {
  const reloadLogin = () => {
    setAction('reload');
    setTimeout(() => setAction('login'), 3000);
  };

  return (
    <>
      <Header
        title="CRIAR UMA NOVA SENHA"
        subtitle="Insira uma nova senha para acesso a plataforma"
        backtitle="LOGIN"
      />
      <FormControl id="password" mt="20px" mb="32px">
        <FormLabel fontSize="24px">Nova Senha</FormLabel>
        <Input
          type="password"
          rounded="none"
          placeholder="********"
          borderColor="var(--black-color)"
        />
      </FormControl>
      <FormControl id="confirm_password" mt="20px" mb="32px">
        <FormLabel fontSize="24px">Confirme a nova senha</FormLabel>
        <Input
          type="password"
          rounded="none"
          placeholder="********"
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
          my={{ base: 2, md: 4 }}
          onClick={reloadLogin}
        >
          REDEFINIR A SENHA
        </Button>
      </Center>
    </>
  );
}
