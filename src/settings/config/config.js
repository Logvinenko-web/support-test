const dev = {
  apiUrl: 'http://localhost:3030/',
};

const prod = {
  apiUrl: '/api/',
};

const config = process.env.NODE_ENV === 'production' ? prod : dev;

export default {
  ...config,
};
