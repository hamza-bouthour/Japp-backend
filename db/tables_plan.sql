CREATE TABLE tables_plan (
	id_plan serial PRIMARY KEY,
	id_table INTEGER,
    position_x INTEGER,
    position_y INTEGER,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
    img_cat_name VARCHAR ( 255 ),
    img_cat_path VARCHAR ( 255 ),
    img_cat_on BOOLEAN DEFAULT 'false' 
);