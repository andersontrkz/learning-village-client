import { Box, Flex } from '@chakra-ui/layout';
import { Spinner } from '@chakra-ui/react';
import { useContext, useEffect, useState } from 'react';

import Context from '../../../context/Global/Context';

import Card from './Card';

export default function CardList() {
  const { requestPosts } = useContext(Context);
  const [posts, setPosts] = useState([]);

  const loadPosts = async () => {
    const data = await requestPosts();
    setPosts(data);
  };

  useEffect(() => {
    loadPosts();
  }, []);

  return (
    <Box mt="16">
      {posts.length ? (
        posts.map((post: any, index: number) => {
          return <Card key={index} data={post} index={index} />;
        })
      ) : (
        <Flex justify="center">
          <Spinner
            m="0 auto"
            thickness="4px"
            speed="0.65s"
            emptyColor="gray.200"
            color="var(--primary-color)"
            size="xl"
          />
        </Flex>
      )}
    </Box>
  );
}
