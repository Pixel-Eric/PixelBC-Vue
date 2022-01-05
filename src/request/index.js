import axios from "axios";
import { getToken } from "../session";

let config = {
    //请求超时时间
    timeout:5000
}

const request = axios.create({
    method:'get'
})
// axios请求拦截器
request.interceptors.request.use(
    config=>{
        let token = getToken();
        if(token!=null){
            Object.assign(config.headers,{'token':token});
        }
        return config;
    },
    error=>Promise.reject(error)
);

// axios响应拦截器
request.interceptors.response.use(function (response) {
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

  export default request;