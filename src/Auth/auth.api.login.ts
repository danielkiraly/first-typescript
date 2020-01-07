import Axios, { AxiosRequestConfig } from 'axios'

export interface Credentials {
    username: string;
    password: string;
}

export const onLogin = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:8080/auth/signin',
        data
    }
    try {
        const {data: response} = await Axios.request(requestConfig); 
    } catch (e) {
        console.log(e)
        return {error: e.response.data.message}
    }

}