import { Layout } from '../../Layout/Layout';
import { Post } from '../../Modals/Post';

import CardList from './CardList';

export const Feed = () => {
  return (
    <Layout>
      <Post />
      <CardList />
    </Layout>
  );
};
