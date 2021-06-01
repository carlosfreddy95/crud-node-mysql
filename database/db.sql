-- creating database
CREATE DATABASE faztcrudmysql;

--using db
use faztcrudmysql;

-- creating table
CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- show all tables
SHOW TABLES;

-- describe table
describe customer;