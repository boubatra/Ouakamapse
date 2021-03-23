CREATE OR REPLACE DATABASE Projet_schema;

CREATE TABLE Seance(
    Id_Conference STRING primary key,
    Date_debut DATE,
    Date_fin DATE,
    Partage_ecran INTEGER,
    Note INTEGER,
    Qualite STRING,
    Nb_interaction INTEGER
);

CREATE TABLE Classe(
    Id_classe STRING primary key,
    Effectif INTEGER
);

CREATE TABLE Participant(
    Nb_Connexion_Deconnexion INTEGER,
    Duree_Moyenne_Presence INTEGER,
    Type_terminal STRING,
    Adresse_mail STRING,
    Localisation STRING
);