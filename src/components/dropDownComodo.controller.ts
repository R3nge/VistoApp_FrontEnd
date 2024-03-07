// Importing necessary modules and components
import { api, isAxiosError } from "../axiosConfig";

// Defining the data structure for the dropdown
interface DropDownComodoData {
    id: string;
    imovelId: string;
    tipo: string;
    numero: number;
    componente: [
        {
            id: string;
            comodoId: string;
            vistoriaId: string;
            tipo: string;
            obs: string;
            cor: string;
            estado: string;
            material: string;
        }
    ]
}

// Defining the data fetching function
const data = async (
    id?: string,
    imovelId?: string,
    tipo?: string,
    numero?: number,
    componente?: [
        {
            id: string;
            comodoId: string;
            vistoriaId: string;
            tipo: string;
            obs: string;
            cor: string;
            estado: string;
            material: string;
        }
    ]
): Promise<DropDownComodoData[]> => {
    try {
        // Making a GET request to the API
        const response = await api.get(
            "/Comodo/PegarComodos",
            {
                params: {
                    id,
                    imovelId,
                    tipo,
                    numero,
                    componente,
                }
            }
        );

        // Transforming the data to the format expected by the Dropdown
        const dropdownData: DropDownComodoData[] = response?.data.map((comodo: DropDownComodoData) => ({
            label: `${comodo.tipo} - ${comodo.numero} - ${comodo.imovelId}`,
            value: comodo.id,
        }));

        // Returning the transformed data
        return dropdownData;
    } catch (err) {
        // Handling any errors
        if (isAxiosError(err)) {
            console.error("Axios error:", err);
            console.error("Response data:", err.response?.data);
            console.error("Request config:", err.config);
        } else {
            console.error("Non-Axios error:", err);
        }
        // Returning null in case of an error
        return null;
    }
};

// Exporting the data function
export default data;