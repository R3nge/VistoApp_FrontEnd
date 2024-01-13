import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const createUserController = async (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    birthDate: string,
    type: string,
): Promise<boolean> => {
    try {
        console.log(birthDate)
        const response = await api.post("/User/CreateUser", { email, password, confirmPassword, fullName, birthDate, type});

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

export default createUserController;