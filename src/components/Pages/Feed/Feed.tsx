import { useContext } from 'react';
import { Redirect } from 'react-router';

import Context from '../../../context/Global/Context';
import { Layout } from '../../Layout/Layout';
import { Post } from '../../Modals/Post';

import CardList from './CardList';

export const Feed = () => {
  const { userData } = useContext(Context);

  if (!userData) {
    return <Redirect to="/login" />;
  }

  return (
    <Layout>
      <Post />
      <CardList />
    </Layout>
  );
};
