import axios from 'axios';

const instance = axios.create({
  baseURL: '647e1c1aaf984710854af2c6.mockapi.io',
});

export const selectContacts = async () => {
  const data = await instance.get('/');
  return data;
};
