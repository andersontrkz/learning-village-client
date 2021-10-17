import { Text, useBreakpointValue, Heading, Box } from '@chakra-ui/react';

type HeaderProps = {
  title: string;
  subtitle: string;
  backtitle: string;
};

export default function Header({ title, subtitle, backtitle }: HeaderProps) {
  return (
    <Heading fontSize={{ base: 'l', md: 'xl', lg: 'xl' }} mb="16" mt="12">
      <Box zIndex="-1" position="absolute" fontSize="280px" ml="-165" mt="-36" opacity="0.1">
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
