"use strict";
require("dotenv").config();
const nodemailer = require("nodemailer");

const LOG_PREPEND = "MAILER >>> ";

/**
 * @class Creates a new Mailer.
 */
class Mailer {

  /**
   * @constructor Default Constructor.
   * @param {Object} transportOpts Transporter options
   * @param {String} transportOpts.host Hostname or IP address to connect to
   * @param {String} transportOpts.port Port to connect to
   * @param {Object} transportOpts.auth Authentication credentials
   * @param {String} transportOpts.auth.user Sender's email
   * @param {String} transportOpts.auth.password  Sender's password
   * @param {Boolean} transportOpts.secure Should TLS be used
   */
  constructor(transportOpts, logger = console) {

    this.isEnabled = false;
    this.logger = logger;

    if (transportOpts) {
      logger.log(LOG_PREPEND + "Initializing Transporter...");
      this.transporter = nodemailer.createTransport(transportOpts);
      this.isEnabled = true;
    } else {
      let error = LOG_PREPEND + "Couldn't initialize transporter";
      logger.error(error);
      throw new Error(LOG_PREPEND + error);
    }
  }

  /**
   * Sends an email using given mail options and executing callback.
   * 
   * @param {Object} mailOptions Mail options object
  * @param {String} mailOptions.from Sender
  * @param {String[]} mailOptions.to Recipient(s) list
  * @param {String} mailOptions.subject Subject of the email
  * @param {String} mailOptions.text Plain text body
  * @param {String} mailOptions.html HTML body
  * @param {sentCallback} callback - Function with callback example
  */
  sendMail(mailOptions, callback) {
    if (this.isEnabled) {
      this.transporter.sendMail(mailOptions, callback);
    }
  }

  setEnabled(isEnabled) {
    this.isEnabled = isEnabled;
  }

}

module.exports = Mailer;