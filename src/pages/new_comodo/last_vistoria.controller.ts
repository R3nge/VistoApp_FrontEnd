import { api, isAxiosError } from "../../axiosConfig";

interface LastVistoriaControllerProps {
    id: string;
    vistoriadorId: string;
    imovelId: string;
    data: string;
}

const LastVistoriaController = async (
    id?: string,
    vistoriadorId?: string,
    imovelId?: string,
    data?: string,
): Promise<LastVistoriaControllerProps[]> => {
    try {
        const response = await api.get(
            "/Vistoria/UltimaVistoria",
            {
                params: {
                    id,
                    vistoriadorId,
                    imovelId,
                    data,
                }
            }
        );
        // Retorna os dados relevantes da API
        return response?.data;
    } catch (err) {
        if (isAxiosError(err)) {
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            console.error("Non-Axios error:", err);
        }
        // Retorna null em caso de erro
        return null;
    }
};

export default LastVistoriaController;