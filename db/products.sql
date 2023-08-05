CREATE TABLE products (
	id_product serial PRIMARY KEY,
	name_product VARCHAR ( 50 ) UNIQUE NOT NULL,
	description_product VARCHAR ( 255 ) ,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    img_name VARCHAR ( 255 ),
    img_path VARCHAR ( 255 ),
    img_on BOOLEAN DEFAULT 'false', 
    price_product NUMERIC(8, 3) ,
    category VARCHAR ( 50 )
);