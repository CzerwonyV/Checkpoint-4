DROP DATABASE IF EXISTS portfolio;

CREATE DATABASE portfolio;

USE portfolio;

/* Création des tables  */

CREATE TABLE `admin`(
	`id` INT NOT NULL AUTO_INCREMENT,
	`username` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,
	PRIMARY KEY (`id`)
);

CREATE TABLE `sitecard` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `img` LONGBLOB NOT NULL,
    `name` VARCHAR(100),
    `textexplication` VARCHAR(500),
	`urlsite` VARCHAR(500),
    `urlgithub` VARCHAR(500),
    PRIMARY KEY (`id`)
);

CREATE TABLE `actu`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `text` VARCHAR (500) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `rdv`(
    `id` INT NOT NULL AUTO_INCREMENT,
    `firstname` VARCHAR (100) NOT NULL,
    `lastname` VARCHAR (100) NOT NULL,
    `email` VARCHAR (100) NOT NULL,
    `date` TIMESTAMP(2) NOT NULL,
    `subject` VARCHAR (500) NOT NULL,
    PRIMARY KEY (`id`)
);

/*------ insertions--------*/

