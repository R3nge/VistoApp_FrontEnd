import axios from 'axios';

const newEnderecoController = async (
    rua: string,
    complemento: string,
    numero: string,
    bairro: string,
    cidade: string,
    estado: string,
    cep: string,
  ): Promise<boolean> => {
  try {
    const response = await axios.post('/Endereco/CreateEndereco', { rua, complemento, numero, bairro, cidade, estado, cep}, { timeout: 5000 });
    const createdProprietor = response?.data;
    
    console.log('Endereco cadastrado com sucesso!', );

    return true;
  } catch (error) {
    // Handle errors
    console.error('Erro ao cadastrar endereco:', error);
    return false;
  }
};

export default newEnderecoController;
