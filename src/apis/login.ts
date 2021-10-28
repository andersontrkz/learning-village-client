import axios from 'axios';

const URL = 'https://lv.api.stage.loomi.com.br/auth/login';

const login = async (user: { email: string; password: string }) => {
  const response = await axios.post(URL, user);

  return response.data;
};

export default login;
