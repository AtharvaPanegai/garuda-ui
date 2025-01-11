import axios from '../lib/axiosInstance'; // Central axios configuration
import { handleApiError } from './utils';

const _createProject = async (userId,projectName) =>{
    try{

    }catch(err){
        console.error(err);
        throw err;
    }
}


const _createApiKeyForProject = async(projectId,userId) =>{
    try{

    }catch(err){
        console.error(err);
        throw err;
    }
}

const _addOnCallPersonForProject = async (onCallPersonEmail,onCallPersonPhoneNumber,onCallPersonName,projectId) =>{
    try{

    }catch(err){
        console.error(err);
        throw err;
    }
}


export const _getAllProjectsOfCustomer = async(customerId) =>{
    try{
        let projects = await axios.post("/user/projects",{"customerId" : customerId});
        return projects
    }catch(err){
        handleApiError(err);
        throw err;
    }
}

