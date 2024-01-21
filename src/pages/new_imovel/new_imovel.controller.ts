import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const newImovelController = async (
    icm: string,
    tipo: string,
    rua: string,
    complemento: string,
    numero: number,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
    proprietarioId: string,
): Promise<boolean> => {
    try {
        const response = await api.post("/imovel/criar", {
            icm,
            tipo,
            rua,
            complemento,
            numero,
            bairro,
            cidade,
            estado,
            cep,
            proprietarioId
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

interface ProprietarioData {
    // Defina a estrutura dos dados do proprietário
    id: string;
    cpf: string;
    name: string;
    tel: string;
    email: string;
    enderecoId: string;
    type: string;
    birthDate: string;
    endereco: {
        id: string;
        cep: string;
        estado: string;
        cidade: string;
        bairro: string;
        numero: number;
        complemento: string;
        rua: string;
    };
}

const listProprietarioController = async (
    id?: string,
    cpf?: string,
    name?: string,
    tel?: string,
    email?: string,
    enderecoId?: string,
    type?: string,
    birthDate?: string,
    endereco?: {
        id: string;
        cep: string;
        estado: string;
        cidade: string;
        bairro: string;
        numero: number;
        complemento: string;
        rua: string;
    }
): Promise<ProprietarioData[]> => {
    try {
        const response = await api.get(
            "/buscarProprietario",
            { params: { id, cpf, name, tel, email, enderecoId, type, birthDate, endereco } }
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




export default newImovelController;
export { listProprietarioController };