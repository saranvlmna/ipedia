var nodemailer = require("nodemailer");
var fs = require("fs");
require("dotenv").config();

exports.Mail = (mailOptions) => {
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD
    }
  });

  var readHTMLFile = function (path, callback) {
    fs.readFile(path, { encoding: "utf-8" }, function (err, html) {
      if (err) {
        callback(err);
        throw err;
      } else {
        callback(null, html);
      }
    });
  };

  readHTMLFile(__dirname + "/email.template.html", function (err, html) {
    const mail = {
      ...mailOptions,
      html: html
    };
    transport.sendMail(mail);
  });
};
