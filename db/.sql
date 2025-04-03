CREATE TABLE users_roles (
  id INT AUTO_INCREMENT PRIMARY KEY,
  role VARCHAR(100) NOT NULL
);

insert into users_roles (`role`) values ('admin');
insert into users_roles (`role`) values ('user');

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  isActive BOOLEAN DEFAULT TRUE,
  user_role INT DEFAULT 1,
  
  FOREIGN KEY (user_role) REFERENCES users_roles(id)
);

CREATE TABLE products (
  id INT AUTO_INCREMENT PRIMARY KEY,
  description VARCHAR(100) NOT NULL UNIQUE,
  quantity int NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  modified_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  isActive BOOLEAN DEFAULT TRUE,
  user_id INT,
  
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users (
	name,
	email,
	password,
	user_role
) VALUES (
	'luis',
	'lreyes@test.com'
	'123',
	1
)

INSERT INTO products (
	description, 
	quantity,
	user_id
) 
VALUES (
	'Coca-Cola',
	20,
	1
)

select * from users
select * from products 

