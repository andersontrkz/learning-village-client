import { Box } from '@chakra-ui/layout';
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
      {posts.length > 0 &&
        posts.map((post: any, index: number) => {
          return <Card key={index} data={post} index={index} />;
        })}
    </Box>
  );
}
