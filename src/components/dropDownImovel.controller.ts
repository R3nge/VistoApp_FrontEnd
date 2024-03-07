// Importing necessary modules
import { api, isAxiosError } from "../axiosConfig";

// Defining the data structure for the dropdown
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

// Function to fetch data for the dropdown
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
        // Making a GET request to the API
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

        // Transforming the data to the format expected by the dropdown
        const dropdownData: DropDownImovelData[] = response?.data.map((imovel: DropDownImovelData) => ({
            label: `${imovel.rua} - ${imovel.numero}`,
            value: imovel.id,
        }));

        return dropdownData;
    } catch (err) {
        // Handling errors
        if (isAxiosError(err)) {
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            console.error("Non-Axios error:", err);
        }
        // Returning null in case of error
        return null;
    }
};

// Exporting the data function
export default data;