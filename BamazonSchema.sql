DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INTEGER(10) AUTO INCREMENT NOT NULL,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price INT(10) NULL,
stock_quantity INT(10) NULL,
PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Chicken', 'Meats', '5', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Beef', 'Meats', '5', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Turkey', 'Meats', '5', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Pork', 'Meats', '3', '10');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Cheddar', 'Cheese', '3', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Provolone', 'Cheese', '3', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Swiss', 'Cheese', '4', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Havarti', 'Cheese', '4', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('American', 'Cheese', '3', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Feta', 'Cheese', '5', '5');
INSERT INTO products (product_name, department_name, price, stock_quantity) values ('Brie', 'Cheese', '5', '5');
