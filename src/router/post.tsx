import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../axiosConfig";

const loginRoute = async (
  email: string,
  password: string
): Promise<boolean> => {
  try {
    const response = await api.post("/User/Login", { email, password });
    const jwt = response?.data.jwt;

    await AsyncStorage.setItem("token", jwt);
    return true;
  } catch (err) {
    if (isAxiosError(err)) {
      console.error("Axios error:", err);
      console.error("Response data:", err.response?.data);
      console.error("Request config:", err.config);
    } else {
      console.error("Non-Axios error:", err);
    }
  }
  return false;
};

export default loginRoute;