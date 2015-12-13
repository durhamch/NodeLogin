drop table if exists tblUSers;

create table if not exists tblUsers(
	userId int(11) NOT NULL AUTO_INCREMENT,
	username varchar(100) unique,
	password varchar(100),
	PRIMARY KEY (userId)
)ENGINE=InnoDB;