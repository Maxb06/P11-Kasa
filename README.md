Kasa - Application de location d'appartements

Projet 11 de la formation OpenClassrooms - Développeur d'Application JavaScript / React

Présentation 

Kasa est une plateforme de location d'appartements entre particuliers, active depuis près de 10 ans. Avec plus de 500 nouvelles annonces publiées chaque jour, Kasa est un acteur majeur dans le domaine de la location immobilière en France.

Ce projet consiste à développer l'application web de Kasa en utilisant React pour la gestion de l'interface utilisateur et React Router pour la gestion des routes. Le projet est structuré de manière modulaire et utilise des composants réutilisables pour assurer la flexibilité et l'extensibilité du code.

Objectifs

- Découper l'interface en composants modulaires et réutilisables
- Gérer les routes de l'application avec React Router
- Utiliser fetch pour récupérer les données depuis un fichier data.json
- Mettre en place une gestion des props et du state dans les composants
- Utiliser PropTypes pour la validation et la sécurisation des props
- Implémenter une gestion des erreurs (404) lors d'un ID incorrect dans l'URL
- Assurer une compatibilité responsive avec une version desktop et mobile fidèle à la maquette
- Utiliser JSDoc pour documenter les composants et faciliter la maintenance

Fonctionnalités

- Page d'accueil : Présente une bannière avec une phrase d'accroche dynamique, ainsi qu'une galerie de cartes représentant les logements disponibles.
- Page "À Propos" : Décrit les valeurs de l'entreprise à travers des sections interactives sous forme de collapses réutilisables.
- Page de logement : Affiche les détails d'un logement spécifique avec un carrousel d'images, des informations sur le propriétaire, les équipements disponibles, et une description détaillée.
- Gestion des erreurs : Redirection automatique vers une page 404 en cas d'ID incorrect ou inexistant dans l'URL.
- Composants réutilisables : utilisés sur plusieurs pages pour garantir la modularité et la cohérence de l'interface.
- Responsive design : L'application est entièrement responsive, avec un affichage optimisé pour les appareils mobiles, tablettes et ordinateurs de bureau.

Structure du projet

Le projet suit une structure organisée par composants et pages, avec un fichier data.json pour la simulation des données dynamiques.
/src
│
├── /assets       # Contient les images (logo, bannières, etc.)
├── /components   # Composants réutilisables (Collapse, Carrousel, Owner, etc.)
├── /pages        # Différentes pages de l'application (Home, Rent, About)
├── /styles       # Fichiers SCSS globaux et modules spécifiques
├── /api          # Gestion des appels de données (fetch)
├── /data         # Fichier data.json simulant les données des logements
└── App.jsx       # Point d'entrée de l'application

Technologies utilisées

- React : Librairie principale utilisée pour construire l'interface utilisateur.
- React Router : Pour la gestion des routes dynamiques et des paramètres dans l'URL.
- Sass (SCSS) : Pour la gestion des styles et l'utilisation de modules CSS.
- PropTypes : Pour la validation des props et la sécurisation des composants.
- JSDoc : Pour documenter les composants et leurs fonctionnalités.

Installation et démarrage
1. Cloner le repository :
git clone https://github.com/nom-utilisateur/kasa.git

2. Installer les dépendances :
npm install

3. Lancer l'application :
npm run start

Gestion des routes
L'application utilise React Router pour gérer les différentes pages de manière dynamique. Chaque logement est accessible via un ID unique passé dans l'URL (/rent/:id).

Auteur
Ce projet a été réalisé par Maxime Brunet, dans le cadre de la formation OpenClassrooms - Développeur d'Application JavaScript / React.
