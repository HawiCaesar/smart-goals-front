import axios from 'axios';
import * as utils from "../utils/tokenUtilities"


class ItemsService {
    constructor() {

        const service = axios.create({
            baseURL: process.env.API_LOCAL_URL,

        });

        service.interceptors.response.use(this.handleSuccess, this.handleError);


        this.service = service;
    }

    handleSuccess(response) {
        return response;
    }

    handleError(error) {
        console.log(error);
        return Promise.reject(error);
    }

    post(path, data, callback) {
        const token = utils.getAuthToken();
        return this.service.request({
            method: 'POST',
            url: path,
            responseType: 'json',
            data: {"name": data},
            headers: { Authorization: `Bearer ${token}` },

        }).then(response => callback(response.status, response.data));
    }

    get(path, callback) {
        const token = utils.getAuthToken();

        return this.service.request({
            method: 'GET',
            url: path,
            responseType: 'json',
            headers: { Authorization: `Bearer ${token}` },
        }).then(response => callback(response.status, response.data));
    }

    put(path, data, callback) {
        const token = utils.getAuthToken();
        return this.service.request({
            method: 'PUT',
            url: path,
            responseType: 'json',
            data: data,
            headers: { Authorization: `Bearer ${token}` },
        }).then(response => callback(response.status, response.data));
    }

    delete_service(path, callback) {
        const token = utils.getAuthToken();
        return this.service.request({
            method: 'DELETE',
            url: path,
            responseType: 'json',
            headers: { Authorization: `Bearer ${token}` },
        }).then(response => callback(response.status, response.data));
    }
}
export default new ItemsService();