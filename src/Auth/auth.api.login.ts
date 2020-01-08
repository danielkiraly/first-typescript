import Axios, { AxiosRequestConfig } from "axios";
import Cookies from "universal-cookie";

export interface Credentials {
  username: string;
  password: string;
}

export const onLogin = async (data: Credentials) => {
  const requestConfig: AxiosRequestConfig = {
    method: "post",
    url: "http://localhost:8080/auth/signin",
    data
  };

  try {
    const response = await Axios.request(requestConfig);
    console.log(response.data.token);
  } catch (e) {
    console.log(e);
    return { error: e.response.data.message };
  }
};
