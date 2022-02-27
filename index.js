require('rootpath')();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieSession = require("cookie-session");
const db = require("./models");
const dbConfig = require("./config/db.config");
const app = express();

// parse requests of content-type - application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// databse connection 
db.mongoose
    .connect(`${dbConfig.ClOUDURL}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("Successfully connect to MongoDB.");

    })
    .catch(err => {
        console.error("Connection error", err);
        process.exit();
    });


app.use(
    cookieSession({
        name: "piyushtri-session",
        secret: "TEST_COOKIE_SECRET", // should use as secret environment variable
        maxAge: 24 * 60 * 60 * 1000   // one day duration
    })
);



// routes
require("./routes/auth.routes")(app);
require("./routes/preference.routes")(app);


// start server
const port = process.env.PORT || 8000;
const server = app.listen(port, function () {
    console.log('Server listening on port ' + port);
});

