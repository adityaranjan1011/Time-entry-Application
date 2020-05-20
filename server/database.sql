CREATE DATABASE timeEntryApplication;

CREATE TABLE registration (
reg_id SERIAL PRIMARY KEY,
reg_name VARCHAR(20),
user_name VARCHAR(20),
reg_email VARCHAR(50),
);

CREATE TABLE timeEntry (user_name VARCHAR(20),project_name VARCHAR(50),start_time TIME,end_time TIME);