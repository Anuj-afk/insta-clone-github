import axios from 'axios'

// const baseURL = 'http://127.0.0.1:8000/'
const baseURL = 'https://insta-clone-tr7h.onrender.com'
const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers: {
        "content-type": "application/json",
        accept: "application/json",
    }
})

export default AxiosInstance;