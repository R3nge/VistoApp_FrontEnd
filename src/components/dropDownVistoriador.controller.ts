import { api, isAxiosError } from "../axiosConfig";

interface DropdownData {
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
        rua: string;
        complemento: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
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
        rua: string;
        complemento: string;
        numero: number;
        bairro: string;
        cidade: string;
        estado: string;
        cep: string;
    }
): Promise<DropdownData[]> => {
    try {
        const response = await api.get(
            "/buscarVistoriador",
            {
                params: {
                    id,
                    cpf,
                    name,
                    tel,
                    email,
                    enderecoId,
                    type,
                    birthDate,
                    endereco
                }
            }
        );

        // Transforma os dados para o formato esperado pelo Dropdown
        const dropdownData: DropdownData[] = response?.data.map((vistoriador: DropdownData) => ({
            label: vistoriador.name,
            value: vistoriador.id,
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