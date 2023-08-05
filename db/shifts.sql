CREATE TABLE categories (
	id_table serial PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    img_cat_name VARCHAR ( 255 ),
    img_cat_path VARCHAR ( 255 ),
    img_cat_on BOOLEAN DEFAULT 'false', 
);