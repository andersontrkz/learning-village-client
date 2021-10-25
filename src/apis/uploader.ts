import axios from 'axios';

const uploader = axios.create({
  baseURL: 'http://localhost:3000',
});

export default uploader;
