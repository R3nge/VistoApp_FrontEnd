// Importing necessary libraries and modules
import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

// Defining the structure for ProprietarioData
interface ProprietarioData {
    id: string; // ID of the Proprietario
    cpf: string; // CPF of the Proprietario
    name: string; // Name of the Proprietario
    tel: string; // Telephone number of the Proprietario
    email: string; // Email of the Proprietario
    enderecoId: string; // ID of the Endereco associated with the Proprietario
    type: string; // Type of the Proprietario
    birthDate: string; // Birth date of the Proprietario
    endereco: {
        id: string; // ID of the Endereco
        cep: string; // CEP of the Endereco
        estado: string; // State of the Endereco
        cidade: string; // City of the Endereco
        bairro: string; // Neighborhood of the Endereco
        numero: number; // Number of the Endereco
        complemento: string; // Complement of the Endereco
        rua: string; // Street of the Endereco
    };
}

// Defining the listProprietarioController function
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
        // Making a GET request to the "/buscarPessoas" endpoint with the provided parameters
        const response = await api.get(
            "/buscarPessoas",
            { params: { id, cpf, name, tel, email, enderecoId, type, birthDate, endereco } }
        );
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

// Exporting the listProprietarioController function
export default listProprietarioController;