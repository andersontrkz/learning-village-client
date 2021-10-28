import axios from 'axios';

export const getUserById = async ({ accessToken }: any, { userId }: any) => {
  const URL = `https://lv.api.stage.loomi.com.br/users/${userId}`;

  const response = await axios.get(URL, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  return response.data;
};
