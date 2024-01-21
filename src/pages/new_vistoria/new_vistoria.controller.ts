import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

interface VistoriaData {
    vistoriadorId: string;
    imovelId: string;
}

export const newVistoriaController = async (
    vistoriadorId: string,
    imovelId: string,
): Promise<VistoriaData[]> => {

    try {
        const response = await api.post(`/Vistoria/CreateVistoria/${imovelId}`, {
            vistoriadorId,
            imovelId,
        });

        const vistoria = response.data;

        console.log("Response data:", vistoria);

        return vistoria;
    } catch (err) {
        if (isAxiosError(err)) {
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            console.error("Non-Axios error:", err);
        }
    }
};

export default newVistoriaController;


