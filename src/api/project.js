import axios from '../lib/axiosInstance'; // Central axios configuration
import { handleApiError } from './utils';

export const _createProject = async (projectObject) =>{
    try{
        let project = await axios.post("/project/create",projectObject);
        return project.data;
    }catch(err){
        console.error(err);
        throw err;
    }
}


export const _createApiKeyForProject = async(apikeycreationObject) =>{
    try{
        let apikeyResp = await axios.post("/project/createapikey",apikeycreationObject);
        return apikeyResp.data;
    }catch(err){
        console.error(err);
        throw err;
    }
}

export const _addOnCallPersonForProject = async (onCallpersonObject) =>{
    try{
        let oncallpersonAddedResponse = await axios.post("/project/addoncallperson",onCallpersonObject);
        return oncallpersonAddedResponse;
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

