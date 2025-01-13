import axios from '../lib/axiosInstance'; // Central axios configuration
import { handleApiError } from './utils';


export const _getProjectsUnderCustomer = async(customerId) =>{
    try{

        let projects = await axios.post("/user/projects",{"customerId" : customerId});
        return projects;
    }catch(err){
        handleApiError(err);
        throw err;
    }
}

export const _getSingleProjectData = async (projectId) =>{
    try{
        let projectReport = await axios.post("/project/report",{projectId : projectId});
        return projectReport
    }catch(err){
        handleApiError(err);
        throw err;
    }
}


