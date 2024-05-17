-- Creación de la BD (schema) de la Veterinaria
-- SQL / Data Definition Language (DDL)
CREATE TABLE owners (
	owner_id SERIAL PRIMARY KEY,
	first_name VARCHAR(150) NOT NULL,
	last_name VARCHAR(150) NOT NULL,
	email VARCHAR(150) UNIQUE NOT NULL,
	phone VARCHAR(15) NOT NULL
);


CREATE TABLE pets (
	pet_id SERIAL PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	type VARCHAR(150) NOT NULL,
	breed VARCHAR(150) NOT NULL,
	age INT NOT NULL,
	owner_id INT NOT NULL,
	FOREIGN KEY (owner_id) REFERENCES  owners(owner_id)
);

CREATE TABLE veterinarians (
	veterinarian_id SERIAL PRIMARY KEY,
	first_name VARCHAR(150) NOT NULL,
	last_name VARCHAR(150) NOT NULL,
	email VARCHAR(150) UNIQUE NOT NULL,
	phone VARCHAR(15) NOT NULL,
	licence VARCHAR(10) UNIQUE NOT NULL,
	years_experience INT
);

CREATE TABLE attends (
	pet_id int NOT NULL,
	veterinarian_id int NOT NULL,
	FOREIGN KEY(pet_id) REFERENCES pets(pet_id),
	FOREIGN KEY(veterinarian_id) REFERENCES veterinarians(veterinarian_id),
	PRIMARY KEY(pet_id, veterinarian_id) 
/*  Composite Primary Key */
);




/*
ALTER TABLE IF EXISTS public.pets
    ADD COLUMN owner_id integer;
ALTER TABLE IF EXISTS public.pets
    ADD CONSTRAINT owner_id FOREIGN KEY (owner_id)
    REFERENCES public.owners (owner_id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID;

COMMENT ON CONSTRAINT owner_id ON public.pets
    IS 'El pariente de la mascota';
*/
SELECT * FROM pets;