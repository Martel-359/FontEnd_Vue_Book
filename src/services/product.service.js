
import createApiClient from './api.service';

class ProductServices{
    constructor(baseURL = '/api/products'){
        this.api = createApiClient(baseURL);
    }
    
    async getAll(){
        try {
            const response = await this.api.get('/');
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async getById(id){
        try {
            const response = await this.api.get(`/${id}`);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async create(payload){
        try {
            const response = await this.api.post('/', payload);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async update(id, payload){
        try {
            const response = await this.api.put(`/${id}`, payload);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async delete(id){
        try {
            const response = await this.api.delete(`/${id}`);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

    async findByMSHH(MSHH){
        try {
            const response = await this.api.get(`/find/${MSHH}`);
            const result = response.data;
            return result;
        } catch (error) {
            console.error(error);
        }
    }

}

export default new ProductServices();