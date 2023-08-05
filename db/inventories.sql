CREATE TABLE inventories (
	id_inventory serial PRIMARY KEY,
	name_inventory VARCHAR ( 50 ) UNIQUE NOT NULL,
	description_inventory VARCHAR ( 255 ) ,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    img_inv_name VARCHAR ( 255 ),
    img_inv_path VARCHAR ( 255 ),
    img_inv_on BOOLEAN DEFAULT 'false', 
);