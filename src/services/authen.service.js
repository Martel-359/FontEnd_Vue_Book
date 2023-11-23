import router from "../router";
import createApiClient from "./api.service";

class AuthService {
    constructor(baseURL = "/api/auth") {
        this.api = createApiClient(baseURL);
    }

    async login(data) {
        try {
            const response = await this.api.post("/", data);
            const result = response.data;

            if (!result.role) {
                alert("Tai khoan hoac mat khau khong dung");
            } else if(result.role === "user") {
                // Assuming "/admin" is the correct path for the admin page
                localStorage.setItem("user", 1);
                router.push("/");
            }else{
                router.push("/admin");
            }
        } catch (error) {
            console.error(error);
        }
    }

    async logout() {
        localStorage.clear();
        router.push("/");
        localStorage.setItem("user", 0);
    }
}

export default new AuthService();
