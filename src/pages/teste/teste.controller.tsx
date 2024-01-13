import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const testeRoute = async (
  name: string,
): Promise<boolean> => {
  try {
    const response = await api.post("/criarItemPrincipal", { name });
    const jwt = response?.data.jwt;

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

export default testeRoute;