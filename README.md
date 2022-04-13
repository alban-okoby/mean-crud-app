# mean-crud-app
Projet MEAN permettant d'appliquer des connaissances JavaScript sur des technologies back-end (Node, Express et MongoDB) afin de créer des serveurs complets interagissant avec des bases de données en particulier MongoDB. Le projet fait la gestion d'un CRUD.
En termes simple il permet de :
Lire, Créer, Modifier et Supprimer des éléments.


#Authentification
Pour s'assurer que deux utilisateurs ne puissent pas utiliser la même adresse e-mail, nous utiliserons le mot clé unique pour l'attribut email du schéma d'utilisateur userSchema . Les erreurs générées par défaut par MongoDB pouvant être difficiles à résoudre, nous installerons un package de validation pour prévalider les informations avant de les enregistrer :

**npm install mongoose-unique-validator
