# Dahmer's Open Mailer

Dahmer's Open Mailer is an example mailing service using NodeJS and Node-Mailer.
Currently only supports gmail. 📧

## Getting Started

These instructions will get you a copy of the project up and running on your local
machine for development and testing purposes. 

### Prerequisites

In order for Dahmer's Open Mailer to work properly, you cannot have any sort of 2
factor auth configured on the email used to sent the email.

The easiest (**but unsecure**) way to get the mailer to work is by allowing unsafe
apps (such as this one) to use your email adress. Note that this would leave your
account vulnerable to someone knowing your credentials to send emails using your account.

To allow unsafe apps, go to https://myaccount.google.com/u/2/lesssecureapps?pageId=none,
make sure you are on the right account and allow unsafe apps. If you use Google Suite,
you need to allow your domain's users to allow unsafe apps first by following these
instructions: https://support.google.com/a/answer/6260879?hl=en under Manage access to
less secure apps.

XOAuth2 authentication will be added in a future update.

### Installing

A step by step series of examples that tell you how to get a development env running.
**Be sure to read and complete the prerequisites section above.**

1. Install the package by running `npm i --save dahmer-open-mailer`;
2. Import the mailer;
```Javascript
  const Mailer = require("dahmer-open-mailer"); // ES5 Import
```
3. Define the transport and mailing options;
```Javascript
// See Node Mailer's documentation for all the options.
// https://nodemailer.com/smtp/
const transportOpts = {
  service: "gmail", // Only gmail is currently supported.
  secure: false,
  auth: {
    user: "your_gmail@gmail.com",
    pass: "YourPassword"
  }
}

// See Node Mailer's documentation for all the options.
// https://nodemailer.com/message/
const mailOpts = {
  from: "your_gmail@gmail.com",
  to: "some_target@email.com",
  subject: "Mailer Test 📧",
  text: "Congratulations! Your mailer is functional!"
}
```
4. Create a mailer instance;
```Javascript
// Create the mailer instance
let mailer = new Mailer(transportOpts);
```
5. Send the email;
```Javascript
// Send the email.
mailer.sendMail(mailOpts);
```

#### Complete example

```Javascript
const Mailer = require("dahmer-open-mailer"); // ES5 Import

// See Node Mailer's documentation for all the options.
// https://nodemailer.com/smtp/
const transportOpts = {
  service: "gmail", // Only gmail is currently supported.
  secure: false,
  auth: {
    user: "your_gmail@gmail.com",
    pass: "YourPassword"
  }
}

// See Node Mailer's documentation for all the options.
// https://nodemailer.com/message/
const mailOpts = {
  from: "your_gmail@gmail.com",
  to: "some_target@email.com",
  subject: "Mailer Test 📧",
  text: "Congratulations! Your mailer is functional!"
}

// Create the mailer instance
let mailer = new Mailer(transportOpts);

// Send the email.
mailer.sendMail(mailOpts);
```

## Running the tests

To run the tests, run `npm run test`.

## Built With

* [NodeJS](https://nodejs.org/en/) - JavaScript runtime built on Chrome's V8 JavaScript
  engine.
* [NodeMailer](https://nodemailer.com/about/) - a module for Node.js applications to
  allow easy as cake email sending.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the
[tags on this repository](https://github.com/DominicF96/DO_Mailer/tags). 

## Authors

* **Dominic Fournier** - *Initial work*

See also the list of [contributors](https://github.com/DominicF96/DO_Mailer/graphs/contributors) 
who participated in this project.

## License

This project is licensed under the GNUv3.0 License - see the [LICENSE.md](LICENSE.md)
file for details

## Acknowledgments

* Thanks to Esterling Accime for his very useful
  [video tutorial on Nodemailer](https://www.youtube.com/watch?v=Va9UKGs1bwI).



