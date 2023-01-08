import axios from 'axios';

export default axios.create({
  baseURL: `https://test-api.com/`,
  headers: { 'Content-Type': 'application/json' },
});
