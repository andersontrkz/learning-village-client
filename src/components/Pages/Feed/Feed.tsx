import CardList from './CardList';
import { Layout } from './Layout';
import Post from './Post';

export const Feed = () => {
  return (
    <Layout>
      <Post />
      <CardList />
    </Layout>
  );
};
