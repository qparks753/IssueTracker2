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
const COOKIE_SECRET = process.env.COOKIE_SECRET;
app.use(
  cookieSession({
    name:"issuetracker-session",
    secret: COOKIE_SECRET,
    httpOnly:true
  })
);
// simple route



// app.get("/", (req, res) => {
//   res.json({ message: "Welcome to the issue tracker application." });
// });


const router = require("./routes/projectRouter")
app.use("/api/projects",router)

const router2 = require("./routes/ticketRouter")
app.use("/api/tickets", router2)

const router3 = require("./routes/userRouter")
app.use("/api/users", router3)

//  app.use(express.static(path.join(__dirname,"./public")))

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname,"./public/index.html"))
// });

// app.get("/api",(req,res)=>{
//   res.sendFile(path.join(__dirname,"./server.js"))
// })

const db = require("./models");

const Role = db.role;

// db.sequelize.sync({force:true})
// .then(()=>{
//   console.log("Drop and Resync DB");
//   initial();
// });

// db.sequelize.sync();

// function initial() {
//   Role.create({
//     id: 1,
//     name: "user"
//   });
 
//   Role.create({
//     id: 2,
//     name: "moderator"
//   });
 
//   Role.create({
//     id: 3,
//     name: "admin"
//   });
// }


// routes
require("./Routes/authRouter")(app);
require('./Routes/appuserRouter')(app)

// set port, listen for requests
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

