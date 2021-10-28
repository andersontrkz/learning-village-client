import { Flex, VStack, Stack, Image } from '@chakra-ui/react';
import { useState } from 'react';

import backgroundImage from '../../../assets/images/login-background.png';
import logo from '../../../assets/logos/logo.png';
import raigeki from '../../../assets/vectors/raigeki.png';

import Alert from './Alert';
import ConfirmForm from './ConfirmForm';
import LoginForm from './LoginForm';
import RecoveryForm from './RecoveryForm';
import RedefinitionForm from './RedefinitionForm';

export const Login = () => {
  const [action, setAction] = useState('login');

  const selectActionForm = () => {
    switch (action) {
      case 'login':
        return <LoginForm setAction={setAction} />;
      case 'recovery':
        return <RecoveryForm setAction={setAction} />;
      case 'confirm':
        return <ConfirmForm setAction={setAction} />;
      case 'redefinition':
        return <RedefinitionForm setAction={setAction} />;
    }
  };

  return (
    <Stack minH={'100vh'}>
      {action !== 'reload' ? (
        <Stack
          minH={'100vh'}
          maxH={{ md: '100vh' }}
          direction={{ base: 'column-reverse', md: 'row' }}
        >
          <>
            <Flex
              p={{ base: 14, md: 24 }}
              align={'center'}
              justify={'center'}
              bg="--main-background-color"
            >
              <Stack w={'full'} minW={{ base: 64, md: 64, lg: 96 }}>
                {selectActionForm()}
              </Stack>
            </Flex>

            <Flex
              w={'full'}
              h={{ base: '30vh', md: '100vh' }}
              backgroundImage={backgroundImage}
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
              alt={'Login Image'}
            >
              <VStack
                w="full"
                justify="space-between"
                px={{ base: 4, md: 8 }}
                pb="30px"
                bgGradient="linear(to-r, blackAlpha.600, transparent)"
              >
                <Stack maxW={'2xl'} />
                <Stack maxW={'2xl'}>
                  <Image h={{ base: 16, md: 28 }} src={logo} />
                </Stack>
                <Stack>
                  <Image w={{ base: 'full', md: 'auto' }} src={raigeki} />
                </Stack>
              </VStack>
            </Flex>
          </>
        </Stack>
      ) : (
        <Alert text="SENHA REDEFINIDA COM SUCESSO" />
      )}
    </Stack>
  );
};
