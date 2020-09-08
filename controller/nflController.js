const Models = require('../models/exportModels');
const helper = require("../helper/externalFunction");
let debug = require('debug')('nflcontroller');

let getPlayerDetails = ()=>{
   return new Promise((resolve,reject)=>{
      try {
        let apiUrl = `${process.env.apiUrl}/v3/nfl/scores/json/Players`;
        helper.getRequest(apiUrl)
          .then((data)=>{
            let details = data.slice(0,5);
            Models.PlayerDetails.insertMany(details,(err,docs)=>{
               if(err) return reject(err);
               resolve(docs);
            });
          }).catch((err)=>{
            resolve(err)
          })          
      } catch (error) {
         reject(error);
      }
   });
}


module.exports = {
  getPlayerDetails
}