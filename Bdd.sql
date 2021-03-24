CREATE DATABASE Projet_schema;

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

CREATE TABLE Professeur(
    Login VARCHAR(20) primary key,
    Password VARCHAR(20),
    Nb_Connexion_Deconnexion INTEGER,
    Duree_Moyenne_Presence INTEGER,
    Type_terminal VARCHAR(20),
    Adresse_mail VARCHAR(20),
    Localisation VARCHAR(20)
    CONSTRAINT fk_Table_Participant1 FOREIGN KEY (Nb_Connexion_Deconnexion, Duree_Moyenne_Presence,Type_terminal,Adresse_mail,Localisation) REFERENCES Participant(Nb_Connexion_Deconnexion)

);

CREATE TABLE Eleve(
    Nom_utilisateur VARCHAR(20) PRIMARY KEY,
    Nb_Connexion_Deconnexion INTEGER,
    Duree_Moyenne_Presence INTEGER,
    Type_terminal VARCHAR(20),
    Adresse_mail VARCHAR(20),
    Localisation VARCHAR(20),
    CONSTRAINT fk_Table_Participant FOREIGN KEY (Nb_Connexion_Deconnexion, Duree_Moyenne_Presence,Type_terminal,Adresse_mail,Localisation) REFERENCES Participant(Nb_Connexion_Deconnexion)
);

CREATE TABLE Matiere(
    Id_Matiere VARCHAR(20)
);

CREATE TABLE Liste_Presence(
    Id_Liste VARCHAR(20) PRIMARY KEY,
    Adresse_Mail VARCHAR(20) ,
    Id_Classe VARCHAR(20),
    Id_Matiere VARCHAR(20), 
    gh INTEGER
);