// import { useCallback } from 'react';
import axios from 'axios';

//const baseURL = 'https://jsonplaceholder.typicode.com/users';
const baseURL = 'https://localhost:5001/api';
// const baseURL = 'http://127.0.0.1:5001/api/asset';
export const useAssets = () => {
  const getAssets =
    (() => {
      try {
        const result = axios.get(baseURL + '/asset');
        return result.data;
      } catch (e) {
        console.log(e);
      }
    },
    []);
  return {
    getAssets,
  };
};
