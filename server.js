/* eslint-disable no-undef */
const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const cookieSession = require("cookie-session")

require("dotenv").config();



const app = express();

var corsOptions = {
  // origin: "http://localhost:3001"
origin: "*"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

//cookie session

app.use(
  cookieSession({
    name: REACT_APP_COOK_NAME,
     secret: REACT_APP_COOK,
    httpOnly:true
  })
);
// simple route

const router = require("./routes/projectRouter")
app.use("/api/projects",router)

const router2 = require("./routes/ticketRouter")
app.use("/api/tickets", router2)

const router3 = require("./routes/userRouter")
app.use("/api/users", router3)


const db = require("./models");

// const Role = db.role;

// db.sequelize.sync({force:true})
// .then(()=>{
//   console.log("Drop and Resync DB");
//   initial();
// });

 db.sequelize.sync();


// routes
require("./Routes/authRouter")(app);
require('./Routes/appuserRouter')(app)

// set port, listen for requests
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

