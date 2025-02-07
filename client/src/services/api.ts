import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3000";

export const getAvailableCountries = async (page: number, limit: number) => {
  const response = await axios.get(`${API_BASE_URL}/country`, {
    params: {
      page,
      limit,
    },
  });
  return response.data;
};

export const getCountryInfo = async (countryCode: string) => {
  const response = await axios.get(`${API_BASE_URL}/country/${countryCode}`);
  return response.data;
};
