// Importing necessary modules
import { api, isAxiosError } from "../axiosConfig";

// Defining the data structure for the dropdown
interface DropdownData {
    // Define the structure of the owner's data
    id: string; // Unique identifier for the owner
    cpf: string; // CPF number of the owner
    name: string; // Name of the owner
    tel: string; // Telephone number of the owner
    email: string; // Email address of the owner
    enderecoId: string; // Unique identifier for the owner's address
    type: string; // Type of the owner
    birthDate: string; // Birth date of the owner
    endereco: { // Address details of the owner
        id: string; // Unique identifier for the address
        cep: string; // Postal code of the address
        estado: string; // State of the address
        cidade: string; // City of the address
        bairro: string; // Neighborhood of the address
        numero: number; // Number of the address
        complemento: string; // Additional details of the address
        rua: string; // Street of the address
    };
}

// Defining the data fetching function
const data = async (
    // Parameters for the API request
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
): Promise<DropdownData[]> => { // The function returns a promise that resolves with an array of DropdownData
    try {
        // Making a GET request to the "/buscarProprietario" endpoint with the provided parameters
        const response = await api.get(
            "/buscarProprietario",
            { params: { id, cpf, name, tel, email, enderecoId, type, birthDate, endereco } }
        );

        // Transforming the data to the format expected by the Dropdown
        const dropdownData: DropdownData[] = response?.data.map((proprietario: DropdownData) => ({
            label: proprietario.name, // The label is the owner's name
            value: proprietario.id, // The value is the owner's id
        }));

        return dropdownData; // Returning the transformed data
    } catch (err) {
        // Handling errors
        if (isAxiosError(err)) {
            // If the error is an Axios error, log the error details
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            // If the error is not an Axios error, log the error
            console.error("Non-Axios error:", err);
        }
        // Return null in case of error
        return null;
    }
};

// Exporting the data fetching function
export default data;