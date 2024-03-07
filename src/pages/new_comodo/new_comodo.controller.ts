import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

export const newComodoController = async (
    imovelId: string,
    tipo: string,
): Promise<boolean> => {

    try {
        const response = await api.post(`/Comodo/${imovelId}/CriarComodo`, {
            imovelId,
            tipo,
        });

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

export default newComodoController;


