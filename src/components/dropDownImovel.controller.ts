import { api, isAxiosError } from "../axiosConfig";

interface DropDownImovelData {
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
    vinculo: [
        {
            id: string;
            imovelId: string;
            proprietarioId: string;
            proprietario: {
                id: string;
                cpf: string;
                name: string;
                tel: string;
                email: string;
                endereco: {
                    id: string;
                    rua: string;
                    complemento: string;
                    numero: number;
                    bairro: string;
                    cidade: string;
                    estado: string;
                    cep: string;
                }
            }
        }
    ]
}

const data = async (
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
    vinculo?: [
        {
            id: string;
            imovelId: string;
            proprietarioId: string;
            proprietario: {
                id: string;
                cpf: string;
                name: string;
                tel: string;
                email: string;
                endereco: {
                    id: string;
                    rua: string;
                    complemento: string;
                    numero: number;
                    bairro: string;
                    cidade: string;
                    estado: string;
                    cep: string;
                }
            }
        }
    ]
): Promise<DropDownImovelData[]> => {
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

        // Transforma os dados para o formato esperado pelo Dropdown
        const dropdownData: DropDownImovelData[] = response?.data.map((imovel: DropDownImovelData) => ({
            label: imovel.rua,
            value: imovel.id,
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