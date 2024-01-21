import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

interface Vinculo {
    id: string;
    imovelId: string;
    proprietarioId: string;
    proprietario: {
        // Estrutura do proprietário
    };
}

interface Imovel {
    id: string;
    icm: string;
    tipo: string;
    rua: string;
    complemento: string;
    numero: number;
    bairro: string;
    cidade: string;
    estado: string;
    cep: string;
    vinculo: Vinculo[];
}

const listImovelController = async (
    id?: string,
    icm?: string,
    tipo?: string,
    rua?: string,
    complemento?: string,
    numero?: number,
    bairro?: string,
    cidade?: string,
    estado?: string,
    cep?: string,
    vinculo?: Vinculo[]
): Promise<Imovel[]> => {
    try {
        const response = await api.get(
            "/imovel/listar",
            {
                params: {
                    id,
                    icm,
                    tipo,
                    rua,
                    complemento,
                    numero,
                    bairro,
                    cidade,
                    estado,
                    cep,
                    vinculo
                }
            }
        );
        // Retorna os dados relevantes da API
        console.log(response?.data);
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

export default listImovelController;