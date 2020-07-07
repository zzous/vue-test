import Vue from "vue";
import axios, { CancelToken } from "axios";
import store from "@/store";
// create an axios instance

console.log("### API URL ", process.env.VUE_APP_BASE_API);
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
    // withCredentials: true, // send cookies when cross-domain requests
    timeout: 300000
});



// request interceptor
service.interceptors.request.use(
    config => {
        // 토근 추가 
        config.headers.user_id = "user01"        
        return config;
    },
    error => {
        // do something with request error
        console.log("error ---------- ", error); // for debug
        return Promise.reject(error);
    }
);

// response interceptor
service.interceptors.response.use(
    response => {
        const res = response.data;

        // 데이터 타입이 zip인 경우 유효성 처리 무시하기
        if (res.type == "application/zip") {
            return res;
        }

        // 데이터 타입이 json 파일인 경우 유효성 처리 무시하기
        if (res.type == "application/json") {
            return res;
        }

        // code==2200번인 경우만 활성화 처리
        if (res.code == 2200 || res.code === 20000) {
            return res;
        } else {
            // 일반 에러

            return Promise.reject(new Error(res.message || "Error"));
        }
    },
    error => {
        //예외 에러 처리 
        // 서버 요청을 취소한 경우 또는 네트워크 에러인 경우 
        console.log("request use error", error); // for debug

        // axios에서 서버 요청을 취소한 경우에 실행.
        if (axios.isCancel(error)) {
            return Promise.reject(error);
        }

        return Promise.reject(error);
    }
);
export { CancelToken };
export default service;
