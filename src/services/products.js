import axios from 'axios';

const baseUrl = 'http://localhost:3001/api/v1/products';

let token = null;

const setToken = (newToken) => {
  token = `bearer ${newToken}`;
};

const create = async (newProduct) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.post(baseUrl, newProduct, config);
  return response.data;
};

export default { create, setToken };