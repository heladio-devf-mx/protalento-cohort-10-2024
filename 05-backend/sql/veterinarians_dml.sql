-- Insert new data
/*
INSERT INTO owners (first_name, last_name, phone, email)
VALUES ('César','Guerra', '5553334444','cesarlopez@correo.com');
*/



/*
INSERT INTO owners (first_name, last_name, email, phone)
VALUES('Patricia', 'Hernández', 'patricia@mail.com', '5553334444'),
    ('Andrés', 'Pérez', 'andres@sample.com', '1112223333'),
    ('Laura', 'García', 'laura@email.com', '8889990000'),
    ('Fernando', 'Rodríguez', 'fernando@site.com', '5554443333'),
    ('Sofía', 'Lara', 'sofia@correo.com', '5557778888'),
    ('Luisa', 'Fernández', 'luisa@example.com', '7778889999');
*/

select * from owners
ORDER BY owner_id;

--INSERT INTO owners 
--VALUES (2,'César','Guerra','cesar@correo2.com','5553334444');

-- Eliminar datos con DELETE
-- DELETE FROM owners 
-- WHERE owner_id = 1;

-- Actualizar / Update
/*UPDATE owners 
SET first_name = 'Juan Luis' 
WHERE last_name = 'Guerra';
*/
