const { sendEmail } = require("../mailer.service");

const test = () => {
  sendEmail({
    from: process.env.DO_MAILER_EMAIL,
    to: process.env.DO_MAILER_TEST_RECIPIENT,
    subject: "DO_Mailer Test 📧",
    text: "Congratulations! Your mailer is functional!"
  }, (err, data) => {
    if (err) {
      console.error(`ERROR >>> An error occured while sending the email\n`, err);
      console.error(`Credentials >>> '${process.env.DO_MAILER_EMAIL}' '${process.env.DO_MAILER_PASSWORD}'.`)
    } else {
      console.log("The email was sent!", data);
    }
  });
}

module.exports = {
  test
};