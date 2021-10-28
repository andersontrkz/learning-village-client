import { Flex, Text, Image, Box } from '@chakra-ui/react';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext, useEffect, useState } from 'react';

import { getUserById } from '../../../apis/user';
import defaultImage from '../../../assets/images/default-image.png';
import Context from '../../../context/Global/Context';

import { AvatarBox } from './AvatarBox';

interface CardData {
  id?: string;
  title?: string;
  medias?: any;
  content?: string;
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
  const { userData } = useContext(Context);
  const [postUser, setPostUser] = useState({});

  const loadCardUser = async () => {
    const user = await getUserById(userData, data);

    setPostUser(user);
  };

  useEffect(() => {
    loadCardUser();
  }, []);

  const generateCardColor = () => {
    if (index % 2 === 0) {
      return 'var(--dark-gray-color)';
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
      h={{ base: 'auto', md: '288px' }}
      m={{ base: '8px auto 40px', md: '8px auto 18px', lg: '12px auto 24px' }}
      alignItems={{ base: 'center', md: 'unset' }}
      color="var(--white-color)"
    >
      <Text position="relative" d="flex" w={{ base: '100%', md: '65%' }}>
        <Image
          src={(data.medias && data.medias[0].file) || defaultImage}
          alt={`Picture of ${data && data.id}`}
          objectFit="cover"
          w="100%"
        />
      </Text>

      <Box w={{ base: '90%', md: '55%' }} bg={generateCardColor()} pb={{ base: 8, md: 4 }}>
        <Flex justify="space-between" mx="12" my="4">
          <AvatarBox data={postUser} avatarSize="md" borderColor={generateAvatarColor()} />
          <FontAwesomeIcon style={{ margin: '4px' }} icon={faEllipsisV} />
        </Flex>
        <Flex mx={{ base: 6, lg: 12 }} justify="space-between" alignContent="center">
          <Text fontSize="16px" fontFamily="Montserrat">
            {data && data.content}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
}

export default Card;
