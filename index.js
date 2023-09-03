const express = require("express");
const cors = require("cors");
require("dotenv").config();
const app = express();
const port = process.env.PORT || 5000;
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const nodemailer = require("nodemailer");
const dbConnect = require("./utils/dbConnect.js");
const toolsRoute = require("./routes/tools.route.js");
const viewCount = require("./middleWare/viewController.js");
const errorHandler = require("./middleWare/errorHandler.js");


app.use(cors());
app.use(express.json());
app.set("view engine", "ejs")

dbConnect();
app.use("/api/v1/tools", toolsRoute)


app.get("/", (req, res) => {
  // res.send("Hello World");
  res.render("home.ejs",{
    id:2,
    user:{
      name: "test"
    }
  })
});
app.all("*", (req, res) => {
  res.send("No route found");
});

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});


//  express error handle korte na parle eta use korbo
process.on("unhandleRejection", (error)=>{
  console.log(error.name, error.message);
  app.close(()=>{
    process.exit(1)
  })
})


