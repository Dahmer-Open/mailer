"use strict";
require("dotenv").config({path: __dirname + '/../.env'});
const Mailer = require("../../index");

/**
 * Run this script by using the `node ./01_Simple.js` command.
 * 
 * Make sure that you have created the .env file with the needed
 * variables (DO_MAILER_SERVICE, DO_MAILER_EMAIL, DO_MAILER_PASSWORD).
 * Also specify YOUR_EMAIL on the first line.
 */

const YOUR_EMAIL = "YOUR_EMAIL";

const transportOpts = {
  service: process.env.DO_MAILER_SERVICE,
  secure: false,
  auth: {
    user: process.env.DO_MAILER_EMAIL,
    pass: process.env.DO_MAILER_PASSWORD
  }
}

const mailOpts = {
  from: process.env.DO_MAILER_EMAIL,
  to: YOUR_EMAIL,
  subject: "Mailer Test 📧",
  text: "Congratulations! Your mailer is functional!"
}

let mailer = new Mailer(transportOpts);
mailer.sendMail(mailOpts, (err, data) => {
  if (err) {
    console.error("Oops, something bad happened...", err);
  } else {
    console.log("Email sent! You should receive it shortly.");
  }
});