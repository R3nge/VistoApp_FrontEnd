import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

export const newComponenteController = async (
    comodoId: string,
    vistoriaId: string,
    tipo: string,
    obs: string,
    cor: string,
    estado: string,
    material: string,
): Promise<boolean> => {
    try {
        const response = await api.post(`/${vistoriaId}/${comodoId}/criarComponente`, {
            comodoId,
            vistoriaId,
            tipo,
            obs,
            cor,
            estado,
            material,
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

export default newComponenteController;

