import { api, isAxiosError } from "../axiosConfig";

interface DropdownData {
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

const data = async (
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
): Promise<DropdownData[]> => {
    try {
        const response = await api.get(
            "/buscarProprietario",
            { params: { id, cpf, name, tel, email, enderecoId, type, birthDate, endereco } }
        );

        // Transforma os dados para o formato esperado pelo Dropdown
        const dropdownData: DropdownData[] = response?.data.map((proprietario: DropdownData) => ({
            label: proprietario.name,
            value: proprietario.id,
        }));

        return dropdownData;
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

export default data;