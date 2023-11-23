import createApiClient from "./api.service";

class OrderService {
    constructor(baseURL="/api/orders") {
        this.api = createApiClient(baseURL);
    }

    async getAll() {
        try {
            const response = await this.api.get("/");
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async create(payload) {
        try {
            const response = await this.api.post("/", payload);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async update(SoDonHang, payload) {
        try {
            const response = await this.api.put(`/${SoDonHang}`, payload);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }
}

export default new OrderService();