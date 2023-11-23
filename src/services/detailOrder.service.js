import createApiClient from "./api.service";

class DetailOrderService {
    constructor(baseURL="/api/details") {
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

    async getById(SoDonHang) {
        try {
            const response = await this.api.get(`/${SoDonHang}`);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

}

export default new DetailOrderService();