import {
  Button,
  Flex,
  VStack,
  Stack,
  Text,
  useBreakpointValue,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Link,
  IconButton,
  Box,
} from '@chakra-ui/react';
import { faMicrosoft, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Login = () => {
  return (
    <Stack
      minH={'100vh'}
      direction={{ base: 'column', md: 'row' }}
      backgroundColor="--main-background-color"
    >
      <Flex
        p={24}
        flex={1}
        align={'center'}
        justify={'center'}
        backgroundColor="--main-background-color"
      >
        <Stack spacing={6} w={'full'} minW={{ base: '64', md: '64', lg: '96' }}>
          <Heading fontSize={{ base: 'l', md: 'xl', lg: 'xl' }} mb="8">
            <Box
              zIndex="-1"
              position="absolute"
              fontSize={{ base: '170', sm: '180', md: '200', lg: '200' }}
              ml="-60"
              mt="-24"
              opacity="0.1"
            >
              <Text>LOGIN</Text>
            </Box>
            <Text
              as={'span'}
              position={'relative'}
              color="var(--primary-color)"
              _after={{
                content: "''",
                width: 'full',
                height: useBreakpointValue({ base: '20%', md: '30%' }),
                position: 'absolute',
                bottom: 1,
                left: 0,
                zIndex: -1,
              }}
            >
              ENTRAR NA SUA CONTA
            </Text>
            <br /> <Text as={'span'}>LOGIN</Text>{' '}
          </Heading>
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
          >
            Esqueci minha senha
          </Link>
          <Button
            bg={'var(--primary-color)'}
            textColor={'var(--white-color)'}
            rounded="none"
            rightIcon={<FontAwesomeIcon icon={faChevronRight} />}
            width={{ base: '2xs', sm: '2xs', md: '3xs', lg: '3xs' }}
            alignSelf="center"
            _hover={{
              bg: 'var(--primary-color-alt)',
            }}
          >
            Entrar
          </Button>
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
              }}
            />
          </Flex>
        </Stack>
      </Flex>

      <Flex
        w={'full'}
        h={'100vh'}
        backgroundImage={'https://blogs.esa.int/space19plus/files/2019/03/nebula.jpg'}
        backgroundSize={'cover'}
        backgroundPosition={'center center'}
        alt={'Login Image'}
      >
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        >
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'white'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}
            >
              Learning Village Logo
            </Text>
          </Stack>
        </VStack>
      </Flex>
    </Stack>
  );
};
