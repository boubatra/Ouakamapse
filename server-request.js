const https = require("https");


const fs = require("fs");

https
  .get("https://admin.googleapis.com/admin/reports/v1/activity/users/{all}/applications/{meet}", resp => {
    let data = "";

    // A chunk of data has been recieved.
    resp.on("data", chunk => {
      data += chunk;
    });

    // The whole response has been received. Print out the result.
    resp.on("end", () => {
      let url = JSON.parse(data);
      console.log(url);

    });
  })
  .on("error", err => {
    console.log("Error: " + err.message);
  });
