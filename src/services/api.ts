import axios from 'axios';

export interface BadRequestExcetions {
  details: string,
  developerMessage: string,
  status: number,
  timestamp: string,
  title: string
}

const api = axios.create({
  baseURL: 'http://localhost:8080/'
});

export default api;