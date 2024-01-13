import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const newProprietarioController = async (
    name: string,
    email: string,
    tel: number,
    cpf: string,
    type: string,
    birthDate: string,
    cep : string,
    estado : string,
    cidade : string,
    bairro : string,
    numero : number,
    complemento : string,
    rua : string,
    ): Promise<boolean> => {
      try {
        const response = await api.post("/criarPessoa", { name, email, tel, cpf, type, birthDate, cep, estado, cidade, bairro, numero, complemento, rua });
        const jwt = response?.data.jwt;
    
        await AsyncStorage.setItem("token", jwt);
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