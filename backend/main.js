const express = require("express");
const app = express();


app.use(express.json());

app.get("/todos", (res, req) => {

});

app.post("/cerate-todo", (res, req) => {

});

app.put("/completed", (res, req)=>{

});

app.listen(3000);
