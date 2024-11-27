const  express = require( "express");
const  cors = require("cors");
const morgan = require("morgan");


// Initalize express app 
const app = express();
app.use(express.json());

app.use(morgan('dev'))




// MIDDLEWARES IMPORTS
const errorHandler = require("./errors/errorHandler.js");
const fetchUser = require("./middleware/fetchUserDetail");
const notFound = require("./middleware/NotFound");


// ROUTES IMPORT
const auth = require("./routes/auth");
const notes = require("./routes/notes");
// const admin = require("./routes/admin")



//  Testing api's 
app.get("/", (req, res) => {
    res.status(200).send({"message": "API's are running perfectly!"})
  })

// ROUTES INITALIZE
app.use("/api/v1/auth", auth);
app.use("/api/v1/notes", fetchUser, notes);
// app.use("api/v1/admin", admin);


app.use(errorHandler);
app.use(notFound);
app.use(cors());







module.exports = {
    app
}

