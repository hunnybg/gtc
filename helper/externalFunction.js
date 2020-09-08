const axios = require('axios');

let getRequest = (url)=>{
    return new Promise(async (resolve, reject) => {
      try {  
        const response = await axios.get(url, {
          headers: { "Ocp-Apim-Subscription-Key": process.env.subscribe_key },
        });
        resolve(response.data);
      } catch (error) {
        reject(error.response.data);
      }
    });
}

module.exports={
    getRequest
}