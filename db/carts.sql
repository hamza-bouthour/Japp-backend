CREATE TABLE carts (
	id_cart serial PRIMARY KEY ,
	id_table INTEGER NOT NULL, 
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
	id_product INTEGER ,
	name_product VARCHAR ( 50 ) UNIQUE NOT NULL ,
    price_product NUMERIC(8, 3) ,
	constraint fk_id_product
	    foreign key (fk_id_product) 
    	REFERENCES products (id_product)
-- groupe by id id_cart, id_table
);