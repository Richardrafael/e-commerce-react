const apiUrl = '/api/fruit/all';

export const api = apiUrl;
// Set params
export const requestConfig = (method) => {
  let config;

  if (method === 'GET') {
    config = {
      method: method,
      headers: {},
      mode: 'cors',
    };
  }
  return config;
};
