-- to create a new database
CREATE DATABASE crudnodejsmysql;

-- to use database
use crudnodejsmysql;

-- creating a new table
CREATE TABLE customers (
  id INT AUTO_INCREMENT  not null,
  name VARCHAR(255) NOT NULL,
  address VARCHAR(255) NOT NULL,
  phone bigint not null ,primary key(id)
);

-- to show all tables
show tables;

-- to describe table
describe customers;
  