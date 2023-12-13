import axios, { AxiosError } from "axios";

const baseURL = "https://vistoapp-backend.vercel.app/";

const api = axios.create({
  baseURL: baseURL,
});

const isAxiosError = (error: unknown): error is AxiosError => {
  return "isAxiosError" in (error as AxiosError);
};

export { api, isAxiosError };
