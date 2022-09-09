import axios from "axios";

const instance = axios.create({
  baseURL: 'http://localhost:8010/proxy',
});

instance.interceptors.request.use(
  (config) => {
    config.headers.Authorization =  `Apisecret ${process.env.REACT_APP_VDOCIPHER_KEY}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default instance;
