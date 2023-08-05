CREATE TABLE categories (
	id_category serial PRIMARY KEY,
	name_category VARCHAR ( 50 ) UNIQUE NOT NULL,
	description_category VARCHAR ( 255 ) ,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    img_cat_name VARCHAR ( 255 ),
    img_cat_path VARCHAR ( 255 ),
    img_cat_on BOOLEAN DEFAULT 'false', 
);