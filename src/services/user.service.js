import createApiClient from "./api.service";

class UserService {
    constructor(baseURL = "/api/users") {
        this.api = createApiClient(baseURL);
    }

    async getAll() {
        return (await this.api.get("/")).data;
    }

    async getById(id) {
        return (await this.api.get(`/${id}`)).data;
        // return await this.api.put(`/${id}`, data).data;

    }

    async create(data) {
        await this.api.post("/", data);
        alert("User created successfully!");
    }

    async update(id, data) {
        return await this.api.put(`/${id}`, data).data;
    }

    async delete(id) {
        await this.api.delete(`/${id}`).data;
        alert("User created successfully!");
    }
}

export default new UserService();