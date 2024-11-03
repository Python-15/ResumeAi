import axios from "axios";


const API_KEY=import.meta.env.VITE_STRAPI_API_TOKEN;
const axiosClient=axios.create({
    baseURL:"http:/http://localhost:1337/api/",
    headers:{
        'Content-Type':'application/json',
        'Authorization':`Bearer ${API_KEY}`
    }
})

const createResume = axiosClient.post('user-resumes')

export default{
    createResume
}
