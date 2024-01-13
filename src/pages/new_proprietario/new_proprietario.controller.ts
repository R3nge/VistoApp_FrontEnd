import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";
import React from "react";

interface Endereco {
  cep: string;
  estado: string;
  cidade: string;
  bairro: string;
  numero: number;
  complemento: string;
  rua: string;
}

interface NewProprietarioParams {
  name: string;
  email: string;
  tel: number;
  cpf: string;
  type: string;
  birthDate: string;
  endereco: Endereco;
}

const newProprietarioController = async (
  params: NewProprietarioParams
): Promise<boolean> => {
  const { name, email, tel, cpf, type, birthDate, endereco } = params;
  try {
    const response = await api.post("/criarPessoa", {
      cpf,
      name,
      tel,
      email,
      birthDate,
      type,
      endereco,
    });
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
    return false;
  }
};

export default newProprietarioController;
