console.log("welcome to Magic Notes");
// ENTERNAL PACKAGES
const  dotenv  = require("dotenv");
const  connectDB  = require("./server/db_connect.js");
const  {app} = require ('./server/app.js')

dotenv.config({ path: "./.env" });



const port = process.env.PORT || 5000;
const url = process.env.ENVIRONMENT == 'dev' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_PROD 
const host = process.env.HOST;





//  ------------ START THE SERVER ------------------------------

const start = async () => {
  try {
    await connectDB(url);
    app.listen(port, () => {
      console.log(
        `Connect To Db + magic notes app listening on port ${host}:${port}/`
      );
    });
  } catch (err) {
    console.log(err.message);
  }
};

start();
