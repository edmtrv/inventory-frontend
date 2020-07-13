import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/v1/categories';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newCategory) => {
  const response = await axios.post(baseUrl, newCategory);
  return response.data;
};

export default { getAll, create };
