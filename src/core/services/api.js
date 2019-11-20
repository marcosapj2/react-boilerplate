import axios from 'axios';
// http://ec2-18-231-190-110.sa-east-1.compute.amazonaws.com:3000/
const api = axios.create({
  baseURL: 'http://localhost:3000/',
});

export default api;
