const express = require("express");
const cors = require("cors");

var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "Emp",
});

const app = express();
app.use(cors("*"));


app.get("/emps", (request, response) => {
  var queryToFire = "select * from Employee_Tb";
  connection.query(queryToFire, (error, result) => {
    if (error == null) {
      var dataInString = JSON.stringify(result);
      response.setHeader("Content-Type", "application/json");
      response.send(dataInString);
    } else {
      console.log(error);
      response.setHeader("Content-Type", "application/json");
      response.send(error);
    }
  });
});

// app.post("/emps", (request, response) => {
//   var queryToFire = "insert into Employee_Tb values(id,e_name,email,password,emp_id,dname,doj)";
//   connection.query(queryToFire, (error, result) => {
//     if (error == null) {
//       var dataInString = JSON.stringify(result);
//       response.setHeader("Content-Type", "application/json");
//       response.send(dataInString);
//     } else {
//       console.log(error);
//       response.setHeader("Content-Type", "application/json");
//       response.send(error);
//     }
//   });
// });



app.listen(4000, "0.0.0.0", () => {
  console.log("server started on port 4000");
});
