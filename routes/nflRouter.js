var express = require('express');
var router = express.Router();
const helper = require("../helper/externalFunction");
const nflController = require('../controller/nflController');


/* GET users listing. */
router.get('/checkGame', function(req, res, next) {
    let apiUrl = `${process.env.apiUrl}/v3/nfl/scores/json/AreAnyGamesInProgress`;
    helper.getRequest(apiUrl)
      .then((data)=>{
        res.status(200).json({success:true,data:data})
      }).catch((err)=>{
          res.status(400).json({success:false,err:err});
      })
});

router.get('/getPlayerDetails',(req,res)=>{
    nflController.getPlayerDetails()
      .then((data)=>{
        res.status(200).json({success:true,message:"Player Details",data:data})
      }).catch((err)=>{
        res.status(400).json({success:false,err:err});
      });
});
  
module.exports = router;