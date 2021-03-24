CREATE OR REPLACE DATABASE Projet_schema;

CREATE TABLE Seance(
    Id_Conference VARCHAR(20) primary key,
    Date_debut DATETIME,
    Date_fin DATETIME,
    Partage_ecran INTEGER,
    Note INTEGER,
    Qualite VARCHAR(20),
    
    Nb_interaction INTEGER
);

CREATE TABLE Classe(
    Id_classe VARCHAR(20) primary key,
    Effectif INTEGER
);

CREATE TABLE Participant(
    Nb_Connexion_Deconnexion INTEGER,
    Duree_Moyenne_Presence INTEGER,
    Type_terminal VARCHAR(20),
    Adresse_mail VARCHAR(20),
    Localisation VARCHAR(20)
);

CREATE TABLE Professeur();
CREATE TABLE Eleve();
CREATE TABLE Classe();
CREATE TABLE Matiere();
CREATE TABLE Liste_Presence();