import { Flex, Text, Image, Box, Button } from '@chakra-ui/react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { ReactComponent as InterestSvg } from '../../../assets/icons/interest.svg';

import { AvatarBox } from './AvatarBox';

interface CardData {
  title?: string;
  image?: string;
  media: string;
  content: string;
  type: string;
  partner?: string;
  date?: string;
  hour?: string;
}

interface CardProps {
  data: CardData;
  index: number;
}

function Card({ data, index }: CardProps) {
  const generateCardColor = () => {
    if (index % 2 === 0) {
      return 'var(--gray-color)';
    } else {
      return 'var(--primary-color)';
    }
  };

  const generateAvatarColor = () => {
    if (index % 2 === 0) return 'var(--primary-color)';
  };

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      w={{ base: '100%', md: '80%' }}
      h="1xs"
      m={{ base: '8px auto 40px', md: '8px auto 18px', lg: '12px auto 24px' }}
      alignItems={{ base: 'center', md: 'unset' }}
      color="var(--white-color)"
    >
      <Text position="relative" display="flex" w={{ base: '100%', md: '55%' }}>
        <Image src={data.media} alt={`Picture of ${data.type}`} objectFit="cover" w="100%" />
      </Text>

      <Box w="90%" backgroundColor={generateCardColor()} pb={{ base: '8', md: '4' }}>
        {data.type === 'post' ? (
          <Flex
            justifyContent="space-between"
            mx={{ base: '6', lg: '12' }}
            my={{ base: '4', lg: '8' }}
          >
            <AvatarBox avatarSize="md" borderColor={generateAvatarColor()} />
            <FontAwesomeIcon style={{ margin: '4px' }} icon={faEllipsisV} />
          </Flex>
        ) : (
          <Box mx={{ base: '6', lg: '12' }} my={{ base: '4', lg: '8' }}>
            <Text fontSize="24px">{data.title}</Text>
            <Text fontSize="16px" fontFamily="Montserrat" mt="-1.5">
              {data.partner}
            </Text>
            <Flex
              wrap="wrap"
              bg="var(--white-color)"
              w="100%"
              justifyContent="space-between"
              px="6"
              py="2"
              mt={{ base: '2', lg: '6' }}
            >
              <Box color="var(--black-color)">
                <Text fontFamily="Montserrat">{data.date}</Text>
                <Text fontFamily="Montserrat" fontWeight="bold">
                  {data.hour}
                </Text>
              </Box>
              <Button
                fontFamily="Montserrat"
                fontWeight="normal"
                fontSize="12px"
                bg="var(--white-color)"
                color={'var(--black-color)'}
                rounded="none"
                border="1px"
                borderColor="#808285"
                rightIcon={<InterestSvg />}
                width={{ base: '130px', sm: '150px', md: '36', lg: '1xs' }}
                alignSelf="center"
                pl="6"
                _hover={{
                  bg: 'rgba(0, 0, 0, 0.1)',
                  transition: '.9s',
                }}
                onClick={() => console.log('Clicou!')}
              >
                Tem interesse?
              </Button>
            </Flex>
          </Box>
        )}
        <Flex
          mx={{ base: '6', lg: '12' }}
          my={{ base: '0', lg: '6' }}
          justifyContent="space-between"
          alignContent="center"
        >
          <Text fontSize="16px" fontFamily="Montserrat">
            {data.content}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;
