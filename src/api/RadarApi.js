import axios from '../lib/axiosInstance'; // Central axios configuration
import { handleApiError } from './utils';


export const _enableRadarApi = async (apiId) =>{
    try{
        let configApiOptions = {
            reqType : "ADD",
            apiId : apiId
        }

        let response = await axios.post("/radar/config",configApiOptions);
        return true;
    }catch(err){
        console.log(`Error || Error in enabling radar for api`);
        return false
    }
}

export const _disableRadarOnApi = async (apiId) =>{
    try{
        let configApiOptions = {
            reqType : "REMOVE",
            apiId : apiId
        }

        let response = await axios.post("/radar/config",configApiOptions);
        return true;
    }catch(err){
        console.log(`Error || Error in disabling Radar on API`)
        console.log(err)
        return false
    }
}