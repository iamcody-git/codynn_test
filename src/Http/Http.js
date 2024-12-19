import axios from "axios";

const API = axios.create({
    baseURL : 'https://interview-mock-api.onrender.com/api-docs/#/',
    headers:{
        'Content-Type' : 'application/json',
        'Accept' : 'application/json'
    }
})

export default API