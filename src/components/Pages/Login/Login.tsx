import { Flex, VStack, Stack, Text } from '@chakra-ui/react';
import { useState } from 'react';

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
          backgroundColor="--main-background-color"
        >
          <>
            <Flex
              p={{ base: 14, md: 24 }}
              flex={1}
              align={'center'}
              justify={'center'}
              backgroundColor="--main-background-color"
            >
              <Stack w={'full'} minW={{ base: 64, md: 64, lg: 96 }}>
                {selectActionForm()}
              </Stack>
            </Flex>

            <Flex
              w={'full'}
              h={{ base: '30vh', md: '100vh' }}
              backgroundImage={'https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg'}
              backgroundSize={'cover'}
              backgroundPosition={'center center'}
              alt={'Login Image'}
            >
              <VStack
                w={'full'}
                justify={'center'}
                px={{ base: 4, md: 8 }}
                bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
              >
                <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
                  <Text
                    color={'white'}
                    fontWeight={700}
                    lineHeight={1.2}
                    fontSize={{ base: '3xl', md: '4xl' }}
                  >
                    Learning Village Logo
                  </Text>
                </Stack>
              </VStack>
            </Flex>
          </>
        </Stack>
      ) : (
        <Alert />
      )}
    </Stack>
  );
};
