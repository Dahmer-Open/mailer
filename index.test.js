var assert = require('assert');
const nodemailer = require("nodemailer");
const Mailer = require("./index");

/**
 * Mailer tests ===================================================================================
 * Always format test name as such:
 * Should {EXPECTED_BEHAVIOUR} IF {CONDITION}
 * ================================================================================================
 */
describe('Mailer', function () {

  let testAccount = nodemailer.createTestAccount().catch((err) => {
    console.error("Failed to create test account", err);
  });

  const transportOpts = {
    insecure: {
      service: "smtp.ethereal.email",
      secure: false,
      auth: {
        user: testAccount.user,
        pass: testAccount.pass
      }
    }
  };

  const mailOpts = {
    basic: {
      from: process.env.DO_MAILER_EMAIL,
      to: "foo@example.com",
      subject: "Mailer Test 📧",
      text: "Congratulations! Your mailer is functional!"
    }
  };

  it('Should throw an error if Mailer is not given transport options', function () {
    try {
      let mailer = new Mailer();
      assert.fail("Expected an error, received none.");
    } catch (err) {
      assert.ok(true);
    }
  });


  // Mailer.sendMail() tests ======================================================================
  describe('sendMail()', function () {

    it('Should send an email if a good (insecure) configuration is given', function () {
      let mailer = new Mailer(transportOpts.insecure);
      mailer.sendMail(mailOpts.basic, (err, data) => {
        if (err) {
          assert.fail("Expected email to be sent.");
        } else {
          assert.ok();
        }
      });
    });

    it('Callback first param (err) should be defined if sendMail is called when mailer is disabled', function () {
      let mailer = new Mailer(transportOpts.insecure);
      mailer.setEnabled(false);
      mailer.sendMail(mailOpts.basic, (err, data) => {
        if (err) {
          assert.ok();
        } else {
          assert.fail("Expected email to be sent.");
        }
      });
    });

  });

  // Mailer.setEnabled() tests ======================================================================
  describe('setEnabled()', function () {
    it('Should disable the mailer if setEnabled(false)', function () {
      let mailer = new Mailer(transportOpts.insecure);
      mailer.setEnabled(false);
      assert.equal(mailer.isEnabled, false);
    });
  });
});