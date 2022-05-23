const express = require("express");
// const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");



const app = express();

var corsOptions = {
//   origin: "http://localhost:3001"
origin: "*"
};


app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());


// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));
// simple route

const db = require("./models")
db.sequelize.sync();

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




// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});