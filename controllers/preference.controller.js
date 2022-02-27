const config = require("../config/auth.config");
const db = require("../models");
const Preference = db.preference;


var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");


exports.getcolor = (req, res) => {
 
  jwt.verify(req.token, config.secret, (error, authData) => {

    if (error) res.status(500).send( error)
   
    Preference.findOne({
      user: authData.id,
    })
      .exec((err, result) => {
        if (err) {
          res.status(500).send({ message: err });
          return;
        }
        if(!result) result = {label:"White" , color:"#FFFFFF"}

        console.log(result)
        res.status(200).send(result);
      });
  
  })
};

exports.updatecolor = (req, res) => {
  jwt.verify(req.token, config.secret, async(error, authData) => {

    if (error) res.status(500).send( error)
  
    const data = {
      label : req.body.label,
      color:req.body.color,
      user : authData.id
    }
     const  result = await  Preference.updateOne({user: authData.id }, data, {upsert: true})
     
  

        res.status(200).send(result);
      });
  
 
};

