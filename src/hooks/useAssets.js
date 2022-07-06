import { useCallback } from 'react';
import axios from 'axios';

const baseURL = 'https://jsonplaceholder.typicode.com/users';
// const baseURL = 'https://localhost:5001/api/asset';
export const useAssets = () => {
  const getAssets = useCallback(async () => {
    try {
      const result = await axios.get(baseURL);
      return result.data;
    } catch (e) {
      console.log(e);
    }
  }, []);
  return {
    getAssets,
  };
};
