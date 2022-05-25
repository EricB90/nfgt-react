CREATE DATABASE IF NOT EXISTS nfgt;
USE nfgt;

CREATE TABLE artist
    (
        artist_id SMALLINT AUTO_INCREMENT,
        fName VARCHAR(50),
        lName VARCHAR(50),
        handle VARCHAR(50),
        CONSTRAINT pk_artist PRIMARY KEY (artist_id)
    );

CREATE TABLE rarity
    (
        rarity_id TINYINT AUTO_INCREMENT,
        rarity_name VARCHAR(50) NOT NULL,
        CONSTRAINT pk_rarity PRIMARY KEY (rarity_id)
    );

CREATE TABLE nfgt
    (
        nfgt_id SMALLINT AUTO_INCREMENT,
        nfgt_name VARCHAR(50) NOT NULL,
        nfgt_artist SMALLINT NOT NULL,
        nfgt_rarity TINYINT NOT NULL,
        nfgt_value MEDIUMINT NOT NULL,
        nfgt_img VARCHAR(50) NOT NULL,
        CONSTRAINT pk_nfgt_id PRIMARY KEY (nfgt_id),
        CONSTRAINT fk_artist_id FOREIGN KEY (nfgt_artist) REFERENCES artist (artist_id),
        CONSTRAINT fk_rarity_id FOREIGN KEY (nfgt_rarity) REFERENCES rarity (rarity_id)
    );

CREATE TABLE user
    (
        user_id MEDIUMINT AUTO_INCREMENT,
        username VARCHAR(50) NOT NULL,
        full_name VARCHAR(50) NOT NULL,
        email VARCHAR(50) NOT NULL,
        password VARCHAR(50) NOT NULL,
        balance MEDIUMINT DEFAULT 10000,
        CONSTRAINT pk_user PRIMARY KEY (user_id)
    );