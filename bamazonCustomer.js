const mysql = require("mysql");
const inquirer = require("inquirer");
const Table = require('cli-table');

var connection = mysql.createConnection({
    host: "localhost",

    port: 3308,
    user: "root",
    password: "root",
    database: "bamazon_db"
  });

  connection.connect(function(err) {
    if (err) throw err;
        showProducts();
      });
  
      function showProducts() {
        inquirer.prompt ([
          {
            type: "input",
            message: "Enter item ID:",
            name: "itemID"
          }

        ])
      }


   Htable = new Table({
    head: ['Product', 'Department', 'Price', 'Stock Quantity'],
   colWidths: [10, 20,10,20]
});

Htable.push(
  ['Chicken', 'Meat', '5', '10'],
  ['Beef', 'Meat', '5', '10'],
  ['Turkey', 'Meat', '5', '10'],
  ['Pork', 'Meat', '3', '10'],
  ['Cheddar', 'Cheese', '3', '5'],
  ['Provolone', 'Cheese', '3', '5'],
  ['Swiss', 'Cheese', '4', '5'],
  ['Havarti', 'Cheese', '4', '5'],
  ['American', 'Cheese', '3', '5'],
  ['Feta', 'Cheese', '5', '5'],
  ['Brie', 'Cheese', '5', '5'],
 
);

console.log(Htable.toString());



  inquirer
  .prompt([
    { type: "input", message: "Enter item ID", name: "itemID"}

  ])

  .then(answers => {
      console.log(answers.itemID);

  });
  


