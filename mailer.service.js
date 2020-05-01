require("dotenv").config();
const mailer = require("nodemailer");

/**  
 * sentCallback is called when the email is sent or fails to be sent.
 *  
 * @callback sentCallback
 * @param {Object} err If an error occurs, an error will be passed to the callback  
 * @param {Object} data Email sending data
 */

/**
 * Sends an email using given mail options and executing callback.
 * 
 * @param {Object} mailOptions - Mail options object
 * @param {Object} mailOptions.from - Email sender
 * @param {Object} mailOptions.to - Email recipient(s)
 * @param {Object} mailOptions.subject - Email subject
 * @param {Object} mailOptions.text - Email content
 * @param {sentCallback} callback - Function with callback example
 */
const sendEmail = (mailOptions, callback) => {

  let transporter = mailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.DO_MAILER_EMAIL,
      pass: process.env.DO_MAILER_PASSWORD
    }
  });

  transporter.sendMail(mailOptions, callback);
}

module.exports = {
  sendEmail
};