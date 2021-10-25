import { Text, useBreakpointValue, Heading, Box } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
  subtitle: string;
  backtitle: string;
};

export default function Header({ title, subtitle, backtitle }: HeaderProps) {
  return (
    <Heading
      fontSize={{ base: 'l', md: 'xl', lg: 'xl' }}
      mt={{ base: 0, md: 12 }}
      mb={{ base: 4, md: 16 }}
    >
      <Box
        zIndex="-1"
        position="absolute"
        fontSize={{ base: '200px', md: '280px' }}
        ml={{ base: -100, md: -165 }}
        mt={{ base: -28, md: -36 }}
        opacity="0.1"
      >
        <Text>{backtitle}</Text>
      </Box>
      <Text
        as={'span'}
        position={'relative'}
        color="var(--primary-color)"
        fontSize="38px"
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
        {title}
      </Text>
      <br />{' '}
      <Text as={'span'} fontSize="28px">
        {subtitle}
      </Text>{' '}
    </Heading>
  );
}
