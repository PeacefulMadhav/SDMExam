var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "manager",
  database: "Emp",
});

con.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
  var query =
    "INSERT INTO Employee_Tb VALUES (3,'Madhav','madhav@gmail.com','madhav',6,'IT','25/02/2018')";
  con.query(query, function (err, result) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.listen(3001, "0.0.0.0", () => {
  console.log("server started at port no 3001");
});