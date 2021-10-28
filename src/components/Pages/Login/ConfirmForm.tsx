import { Center, FormControl, FormLabel, Input, Link, Text, Button } from '@chakra-ui/react';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import Header from './Header';

type ConfirmFormFormProps = {
  setAction: (action: string) => void;
};

export default function ConfirmForm({ setAction }: ConfirmFormFormProps) {
  return (
    <>
      <Header title="REDEFINIR A SENHA" subtitle="VERIFIQUE SEU E-MAIL" backtitle="SENHA" />
      <Text textAlign="center" fontSize="13px" fontFamily="Montserrat">
        Enviamos um e-mail com o código de confirmação para a seuemail@learningvillage.com
      </Text>
      <FormControl id="email" mt="20px" mb="32px">
        <FormLabel fontSize="24px">Código de confirmação</FormLabel>
        <Input
          type="text"
          rounded="none"
          placeholder="_ _ _ _ _ _"
          borderColor="var(--black-color)"
          maxLength={6}
          letterSpacing="widest"
        />
      </FormControl>
      <Center mb="64px">
        <Button
          bg={'var(--primary-color)'}
          textColor={'var(--white-color)'}
          rounded="none"
          rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
          w={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
          alignSelf="center"
          py="6"
          _hover={{
            bg: 'var(--primary-color-alt)',
            transition: '.9s',
          }}
          onClick={() => setAction('redefinition')}
        >
          CONFIRMAR O CÓDIGO
        </Button>
      </Center>
      <Center>
        <Text fontFamily="Montserrat" fontSize="12px">
          Não recebeu?
        </Text>
      </Center>
      <Center>
        <Link
          color="var(--primary-color)"
          textDecoration="underline"
          fontWeight="bold"
          fontFamily="Montserrat"
          fontSize="12px"
          _hover={{
            textColor: 'var(--primary-color-alt)',
          }}
          onClick={() => alert('Clicou!')}
        >
          Enviar novamente
        </Link>
      </Center>
    </>
  );
}
