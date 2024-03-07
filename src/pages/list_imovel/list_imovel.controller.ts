// Importing necessary libraries and modules
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

// Defining the structure for Vinculo
interface Vinculo {
    id: string; // ID of the Vinculo
    imovelId: string; // ID of the Imovel
    proprietarioId: string; // ID of the Proprietario
    proprietario: {
        // Structure of the Proprietario
    };
}

// Defining the structure for Imovel
interface Imovel {
    id: string; // ID of the Imovel
    icm: string; // ICM of the Imovel
    tipo: string; // Type of the Imovel
    rua: string; // Street of the Imovel
    complemento: string; // Complement of the Imovel
    numero: number; // Number of the Imovel
    bairro: string; // Neighborhood of the Imovel
    cidade: string; // City of the Imovel
    estado: string; // State of the Imovel
    cep: string; // CEP of the Imovel
    vinculo: Vinculo[]; // Vinculo of the Imovel
}

// Defining the listImovelController function
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
        // Making a GET request to the "/imovel/listar" endpoint with the provided parameters
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
        // Logging the response data
        console.log(response?.data);
        // Returning the response data
        return response?.data;
    } catch (err) {
        // Checking if the error is an Axios error
        if (isAxiosError(err)) {
            // Logging the error details
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            // Logging the error if it's not an Axios error
            console.error("Non-Axios error:", err);
        }
        // Returning null in case of an error
        return null;
    }
};

// Exporting the listImovelController function
export default listImovelController;