CREATE OR REPLACE DATABASE Projet_schema;

CREATE TABLE seance(
    id_Conference STRING,
    date_debut DATE,
    date_fin DATE,
    partage_ecran INTEGER,
    note INTEGER,
    qualite STRING,
    nb_interaction INTEGER
);