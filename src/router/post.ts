import { api, isAxiosError } from "../axiosConfig";

const loginRoute = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await api.post("/User/Login", { email, password });
    const jwt = response?.data.jwt;

    localStorage.setItem("token", jwt);
    return true;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error(err.response?.data);
    }
  }
  return false;
};

export default loginRoute;
