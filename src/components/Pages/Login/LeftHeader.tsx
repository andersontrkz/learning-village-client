import { Text, useBreakpointValue, Heading, Box } from '@chakra-ui/react';

type LeftHeaderProps = {
  title: string;
  subtitle: string;
  backtitle: string;
};

export default function LeftHeader({ title, subtitle, backtitle }: LeftHeaderProps) {
  return (
    <Heading fontSize={{ base: 'l', md: 'xl', lg: 'xl' }} mb="8">
      <Box
        zIndex="-1"
        position="absolute"
        fontSize={{ base: '170', sm: '180', md: '200', lg: '200' }}
        ml="-60"
        mt="-24"
        opacity="0.1"
      >
        <Text>{backtitle}</Text>
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
        {title}
      </Text>
      <br /> <Text as={'span'}>{subtitle}</Text>{' '}
    </Heading>
  );
}
