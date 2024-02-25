import axios from 'axios';

// 创建一个新的 Axios 实例
const AxiosInstance = axios.create({
    // baseURL: 'http://api.example.com', // 设置基本的 URL
    timeout: 10000, // 设置超时时间为10秒
});

// 请求拦截器
AxiosInstance.interceptors.request.use(
    (config) => {
        // 在发送请求之前做些什么
        // 可以在此处设置请求头等
        // console.log('请求拦截器', config);
        return config;
    },
    (error) => {
        // 对请求错误做些什么
        // console.error('请求拦截器错误', error);
        return Promise.reject(error);
    }
);

// 响应拦截器
AxiosInstance.interceptors.response.use(
    (response) => {
        // 对响应数据做点什么
        console.log('响应拦截器', response);
        return response;
    },
    (error) => {
        // 对响应错误做点什么
        // console.error('响应拦截器错误', error);
        return Promise.reject(error);
    }
);




interface Params {
    url: string;
    params?: Record<string, any>;
}

export default async function $Http(params: Params, method: string = 'GET') {
    const { url, params: queryParams } = params; // 解构参数对象
    try {
        const response = await AxiosInstance({
            method: method,
            url: url,
            params: queryParams
        });
        // 返回响应数据
        return response.data;
    } catch (error) {
        // 如果请求失败，捕获错误并进行处理
        // console.error('请求失败:', error);
        throw error; // 可以选择抛出错误供上层处理
    }
}


