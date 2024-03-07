// Importing necessary modules
import { api, isAxiosError } from "../axiosConfig";

// Defining the structure of the data to be fetched
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

// Defining the data fetching function
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
        // Making a GET request to the "/buscarVistoriador" endpoint with the provided parameters
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

        // Transforming the fetched data to the format expected by the dropdown
        const dropdownData: DropdownData[] = response?.data.map((vistoriador: DropdownData) => ({
            label: vistoriador.name,
            value: vistoriador.id,
        }));

        // Returning the transformed data
        return dropdownData;
    } catch (err) {
        // Handling any errors
        if (isAxiosError(err)) {
            // If the error is an Axios error, logging the error details
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            // If the error is not an Axios error, logging the error
            console.error("Non-Axios error:", err);
        }
        // Returning null in case of an error
        return null;
    }
};

// Exporting the data fetching function
export default data;