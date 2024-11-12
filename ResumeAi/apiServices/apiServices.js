import axios from "axios";


const API_KEY='20ec8a9705f1a6e54afb1f2b34cb7f063bd65319ab2bf7299297f5abb8bbc715f5f6120cf7dc33a5fedad3b6dd7ddeb295d9cec77ec2400e09895c15554f8e8e9003a41aad428c10f5a52e85e8ade28280fb18d16fc27260020c82e937158493078241d4ab9cebf6b30f1d00222ae5551788ca641d1eac72e5bc3238e11b6bd5'
const axiosClient = axios.create({
    baseURL: "http://localhost:1337/api/",
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const createResume = (data) => axiosClient.post('/user-resumes', data);
const getResumeDetails = (useremail) => axiosClient.get('/user-resumes', useremail)// we will be fetching based on useremail
const updatePersonalDetails =(documentId,data)=>axiosClient.put('/user-resumes/'+documentId ,data)
export default {
    createResume,
    getResumeDetails,
    updatePersonalDetails
    
}; 