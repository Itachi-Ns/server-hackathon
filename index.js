// const http = require('node:http');

// const hostname = '127.0.0.1';
// const port = 3000;

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello, World! adnjsandjn\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// }); 

import express from "express"
import router from "./projectRoutes.js"

const app = express()
app.use(express.json())   //Does the parse and stringify

const PORT = 3000

app.get("/", (req, res) =>{
  res.send("Hello World!")
})

//get, post, delete, patch, put

app.use("/projects", router)

app.listen(PORT, () => {
  console.log("Our Server has started")
})