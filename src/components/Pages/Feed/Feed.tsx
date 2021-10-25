import { Post } from '../../Modals/Post';

import CardList from './CardList';
import { Layout } from './Layout';

export const Feed = () => {
  return (
    <Layout>
      <Post />
      <CardList />
    </Layout>
  );
};
