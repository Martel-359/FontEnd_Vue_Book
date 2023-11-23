import createApiClient from './api.service';

class UploadService {
    constructor(baseURL = '/api/uploads') {
        this.api = createApiClient(baseURL);
    }

    // async uploadFiles(data) {
    //     return await this.api.post('/', data);
    // }

    // async getListFiles() {
    //     return await this.api.get('/');
    // }

    // async downloadFile(filename) {
    //     return await this.api.get(`/${filename}`);
    // }

    async downloadByMSHH(MSHH) {
        return await this.api.get(`/${MSHH}`);
    }
}

export default new UploadService();