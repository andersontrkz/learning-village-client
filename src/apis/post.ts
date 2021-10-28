import axios from 'axios';

const URL = 'https://lv.api.stage.loomi.com.br/posts';

export const getAllPosts = async ({ accessToken }: any) => {
  return await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    params: {
      filter: {
        include: ['medias'],
      },
    },
  });
};
