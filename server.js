// server.js
// const dateTime = require('./sateTimeModule');
// const date = dateTime();
// console.log(dateTime.getCurrentDateTime());

// const os = require('os');
// console.log(os.version());
// console.log(os.loadavg())
// console.log(os.signals());
// var fs = require('fs');
// console.log(fs)

// var Number = require("./random")
// console.log(Number())

import http from "http";

const server = http.createServer((res) => {
    res.write("Hello World");
    res.end();
});

server.listen(3000, () => {
    console.log("Server listening on port is successful");
});

// setheader
// res.writeFile