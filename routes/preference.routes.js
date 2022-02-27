const { authJwt,common ,verifyUserPreference} = require("../middlewares");
// cosnt 
const controller = require("../controllers/preference.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

 

  app.get("/getcolor", [verifyUserPreference.verifyGetPreference() , authJwt.verifyToken  ,common.bodyValidate] ,controller.getcolor);
  app.post("/updatecolor", [verifyUserPreference.verifyUpdatePreference() ,authJwt.verifyToken,common.bodyValidate] ,controller.updatecolor);

 
};
