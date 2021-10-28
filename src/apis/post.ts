import axios from 'axios';

const URL = 'https://lv.api.stage.loomi.com.br/posts';

export const getAll = async ({ accessToken }: any) => {
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

export const create = async ({ accessToken, content, userId }: any) => {
  console.log(accessToken, content, userId);
  return await axios.post(
    URL,
    { content, userId },
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    },
  );
};
