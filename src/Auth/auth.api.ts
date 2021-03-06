import Axios, { AxiosRequestConfig } from 'axios'
import {Redirect} from 'react-router-dom'

export interface Credentials {
    username: string;
    password: string;
}

export const onRegistration = async (data: Credentials) => {
    const requestConfig: AxiosRequestConfig = {
        method: 'post',
        url: 'http://localhost:8080/auth/registration',
        data
    }
    try {
        const {data: response} = await Axios.request(requestConfig); 
    } catch (e) {
        console.log(e)
        return {error: e.response.data.message}
    }

}