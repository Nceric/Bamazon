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
        buyProducts();
      });


   Htable = new Table({
    head: ['id', 'Product', 'Department', 'Price', 'Stock Quantity'],
   colWidths: [10, 10, 20,10,20]
});

Htable.push(
  ['1', 'Chicken', 'Meat', '5', '10'],
  ['2', 'Beef', 'Meat', '5', '10'],
  ['3', 'Turkey', 'Meat', '5', '10'],
  ['4', 'Pork', 'Meat', '3', '10'],
  ['5', 'Cheddar', 'Cheese', '3', '5'],
  ['6', 'Provolone', 'Cheese', '3', '5'],
  ['7', 'Swiss', 'Cheese', '4', '5'],
  ['8', 'Havarti', 'Cheese', '4', '5'],
  ['9', 'American', 'Cheese', '3', '5'],
  ['10', 'Feta', 'Cheese', '5', '5'],
  ['11', 'Brie', 'Cheese', '5', '5'],
 
);

console.log(Htable.toString());

function buyProducts() {
  inquirer
  .prompt([ 
    { type: "input", message: "Enter item ID you wish to buy:", name: "itemID", filter: Number},
    { type: "input", message: "Enter the amount to buy:", name: "quantityID", filter: Number},
  

  ])
  .then(function (answers) {
    const productID = answers.itemID;
    const quantityWanted = answers.quantityID;
    salesTicket(productID, quantityWanted);
  });
  

function salesTicket(itemID, combinedAmnt) {
  connection.query('Select * FROM products WHERE id = ' + itemID, function(err,res){
    if (err) throw err;
    // console.log("rows", res.rows);
    if (combinedAmnt <= res[0].stock_quantity){
      const totalPrice = res[0].price * combinedAmnt;
      console.log("The total cost for " + combinedAmnt + " " +res[0].product_name + " is " + totalPrice + ", Thanks Come Again!");
      connection.query(`UPDATE products SET stock_quantity = stock_quantity - '${combinedAmnt}' WHERE id = '${itemID}';`);
    }
  else {
    console.log("Insufficient Quantity!" +res[0].product_name);
  };
  buyProducts();
});

}};



  


