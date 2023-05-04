const mysql = require('mysql');
const fs = require('fs');
const csv = require('csv-parser');

const connection = mysql.createConnection({
  host: "localhost",
  user: "DB-USERNAME",
  password: "DB-PASSWORD",
  database: "SCHEMA-NAME"
});

connection.connect(function(err) {
  if (err) {
    console.error("Connection error: ", err.message);
  } else {
    console.log("Connected as: ", connection.threadId);
  }
});

const data = [];

fs.createReadStream('C:\Users\dnvas\Documents\GitHub\Team8\public-toilets-community.csv')
  .pipe(csv())
  .on('data', function(row) {
    data.push(row);
  })
  .on('end', function() {
    // Data parsing is complete, perform database operations
    processData(data);
  });

function processData(data) {
  // Loop through the parsed data and perform database operations
  for (let i = 0; i < data.length; i++) {
    const row = data[i];
    const query = 'INSERT INTO public-toilets-community (column1, column2) VALUES (?, ?)';
    const values = [row.column1, row.column2]; // Adjust column names as per your CSV structure

    connection.query(query, values, function(err, result) {
      if (err) {
        console.error("Error inserting row: ", err.message);
      } else {
        console.log("Row inserted: ", result.insertId);
      }
    });
  }

  connection.end();
  console.log("Finished processing data");
}