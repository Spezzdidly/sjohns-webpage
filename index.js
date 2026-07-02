const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.use("/js", express.static(path.join(__dirname, "js")));
app.use("/css", express.static(path.join(__dirname, "css")));

app.listen(8080, () => {
	console.log("The server is running");
});