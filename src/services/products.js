import axios from 'axios';

const baseUrl = '/api/v1/products';

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

const remove = async (productId) => {
  const config = {
    headers: { Authorization: token },
  };

  const response = await axios.delete(`${baseUrl}/${productId}`, config);
  return response.data;
};

export default { create, remove, setToken };
