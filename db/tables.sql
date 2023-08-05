CREATE TABLE tables (
	id_table serial PRIMARY KEY,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP ,
	name_table VARCHAR ( 50 ) UNIQUE NOT NULL,
	description_table VARCHAR ( 255 ) ,
);