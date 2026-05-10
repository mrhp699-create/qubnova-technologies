import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000/api';
const AUTH_STORAGE_KEY = 'qubnova_admin_auth';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export function readStoredAuth() {
  try {
    const rawAuth = window.localStorage.getItem(AUTH_STORAGE_KEY);
    return rawAuth ? JSON.parse(rawAuth) : null;
  } catch {
    window.localStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function persistAuth(auth) {
  if (!auth?.token) return;
  window.localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
}

export function clearStoredAuth() {
  window.localStorage.removeItem(AUTH_STORAGE_KEY);
}

export function getApiErrorMessage(error, fallback = 'Something went wrong. Please try again.') {
  const apiMessage = error?.response?.data?.message;
  const validationMessage = error?.response?.data?.errors?.[0]?.msg;
  return apiMessage || validationMessage || error?.message || fallback;
}

api.interceptors.request.use((config) => {
  const token = readStoredAuth()?.token;

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});
