import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const newProprietarioController = async (
  cpf: string,
  name: string,
  tel: string,
  email: string,
  birthDate: string,
  type: string,
  endereco: {
    cep: string,
    estado: string,
    cidade: string,
    bairro: string,
    numero: number,
    complemento: string,
    rua: string,
  }
): Promise<boolean> => {
  try {
    const response = await api.post("/criarPessoa", { 
      cpf, 
      name, 
      tel, 
      email, 
      birthDate, 
      type,
      endereco 
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

export default newProprietarioController;