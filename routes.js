const express = require("express");

const routes = express.Router();
const axios = require("axios");

routes.post("/tokens", async (req, res) => {
  try {
    let captchaToken = req.body.token;

    // Put your secret key here.
    var secretKey = "<SECRET_KEY>";

    // req.connection.remoteAddress will provide IP address of connected user.

    const url = `https://www.google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${captchaToken}`;

    const response = await axios.post(url);
    const success = response.data;
    console.log(response);

    if (success) {
      res.json({ status: true, result: sucess });
    }
  } catch (err) {
    res.json({ status: false, result: "Not a valid token" });
  }
});

module.exports = routes;
