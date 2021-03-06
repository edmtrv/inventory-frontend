import axios from 'axios';

const baseUrl = '/api/v1/categories';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newCategory) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newCategory, config);
  return response.data;
};

const remove = async (categoryId) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${categoryId}`, config);
  return response.data;
};

export default { setToken, getAll, create, remove };
