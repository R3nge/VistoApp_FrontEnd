import { api, isAxiosError } from "../../axiosConfig";

interface LastComodoControllerProps {
    id: string;
    imovelId: string;
    tipo: string;
    numero: number;
}

const LastComodoController = async (
    id?: string,
    imovelId?: string,
    tipo?: string,
    numero?: number,
): Promise<LastComodoControllerProps[]> => {
    try {
        const response = await api.get(
            "/Comodo/UltimoComodo",
            {
                params: {
                    id,
                    tipo,
                    imovelId,
                    numero,
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

export default LastComodoController;