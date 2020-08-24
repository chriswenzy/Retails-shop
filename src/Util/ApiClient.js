import axios from "axios";
import { constant } from "./Constants/constant";

export class ApiClient {
    static async request(method, url, body) {
        const BaseURL = 'http://nrsapi.needletech.ng/api/v1' + `${url}`;

        const token = localStorage.getItem("token");

        const headers = {
            "Content-Type": "application/json",
        }

        if (token) {
            headers["Authorization"] = `Bearer ${token}` ;
        }

    
        const BodyRequest = body ? body : undefined;

        const request = await axios({
            method: method,
            url: BaseURL,
            headers: headers,
            data: BodyRequest
        });

        return request;
    }

    static async get(url, body) {
        return await this.request(constant.GET, url, body);
    }
    static async post(url, body) {
        return await this.request(constant.POST, url, body);
    }
    static async put(url, body) {
        return await this.request(constant.PUT, url, body);
    }

    static async delete(url, body) {
        return await this.request(constant.DELETE, url, body);
    }

    static async patch(url, body) {
        return await this.request(constant.PATCH, url, body);
    }
    static async setToken (token){
        const response = await localStorage.setItem("token",token);
        if(response){
            return
        }
    }

    static async unsetToken(){
        const response = await localStorage.removeItem("token");
        if(response){
            return
        }
    }
}
