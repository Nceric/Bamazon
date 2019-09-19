DROP DATABASE IF EXISTS bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products (
id INTEGER(11) AUTO INCREMENT NOT NULL,
product_name VARCHAR(30) NULL,
department_name VARCHAR(30) NULL,
price INT(10) NULL,
stock_quantity INT(10) NULL,
PRIMARY KEY (id)
);

INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('1', 'Chicken', 'Meats', '5', '10');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('2', 'Beef', 'Meats', '5', '10');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('3', 'Turkey', 'Meats', '5', '10');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('4', 'Pork', 'Meats', '3', '10');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('5', 'Cheddar', 'Cheese', '3', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('6', 'Provolone', 'Cheese', '3', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('7', 'Swiss', 'Cheese', '4', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('8', 'Havarti', 'Cheese', '4', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('9', 'American', 'Cheese', '3', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('10', 'Feta', 'Cheese', '5', '5');
INSERT INTO products (id, product_name, department_name, price, stock_quantity) values ('11', 'Brie', 'Cheese', '5', '5');
