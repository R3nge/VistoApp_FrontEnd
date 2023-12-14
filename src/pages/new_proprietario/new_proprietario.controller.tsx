import axios from 'axios';

const newProprietarioController = async (
    name: string,
    email: string,
    phone: string,
    cpf: string,
    enredecoId: string,
  ): Promise<boolean> => {
  try {
    const response = await axios.post('/Propietario/CreatePropietario', { name, email, phone, cpf, enredecoId}, { timeout: 5000 });
    const createdProprietor = response?.data;

    // Handle the created proprietor as needed
    console.log('Proprietário cadastrado com sucesso!', createdProprietor);

    return true;
  } catch (error) {
    // Handle errors
    console.error('Erro ao cadastrar proprietário:', error);
    return false;
  }
};

export default newProprietarioController;
