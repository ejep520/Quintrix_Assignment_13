'use strict';
const fs = require("fs");
const axios = require("axios");


if (!fs.existsSync("./Hamlet3_1.txt")) {
    console.log("The file Hamlet3_1.txt couldn't be found. Abend.");
    exit(1);
}

fs.readFile("./Hamlet3_1.txt", "utf-8", (e, data) => {
    if (e) {
        console.log(e.message);
        return;
    }
    console.log(data);
});

axios.get("https://nodejs.org").then(resp => console.log(resp.data));
