import AsyncStorage from "@react-native-async-storage/async-storage";
import { api, isAxiosError } from "../../axiosConfig";

const createUserController = async (
    email: string,
    password: string,
    confirmPassword: string,
    fullName: string,
    birthday: string,
    type: string,
): Promise<boolean> => {
    try {
        const response = await api.post("/User/CreateUser", { email, password, confirmPassword, fullName, birthday, type});
        const jwt = response?.data.jwt;

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