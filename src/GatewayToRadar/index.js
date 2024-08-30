import axios from "axios"
// eslint-disable-next-line no-undef
const apiUrl = process.env.RADAR_API

exports.sendToRadar = async(apiOptions) =>{
    let resp;
    try{
        console.log("Sending Data");
        await axios(apiOptions);
    }catch(err){
        console.error(`Error || Error in calling radar api`);
        console.log(err);
        throw err;
    }

    return resp;
}