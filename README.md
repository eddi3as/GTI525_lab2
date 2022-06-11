# GTI525 Labo 2
## Setup for Eco Velo
### Frontend
#### DEV
    npm install
    ng serve
#### PROD
    ng build
###Backend 
(SSR is now enabled view SERVER README)

    npm install 
    npm run build
    npm run start


# T1: Affichage des données sur une carte

## T1.1 Esteban
Ajouter une modale (overlay) qui apparaîtra lorsque l’utilisateur cliquera sur un des icônes de la vue comptage de vélos.
- [] Commencé
- [] Fait

## T1.2 Vincent
Ajouter sur la carte des marqueurs correspondants à tous les compteurs disponibles. L’icône selectionné avoir une couleur différente de celles des autres.
- [] Commencé
- [] Fait

## T1.3 Vincent
Tous les marqueurs doivent contenir des indices contextuels (pop-up hints). L’icône selectionné doit avoir l'indice affiché par défaut lorsque la couche modale apparaît.
- [] Commencé
- [] Fait

## T1.4 Esteban
La carte doit être initialement centrée pour afficher l'ensemble des compteurs disponibles.
- [] Commencé
- [] Fait

# T2: Application dorsale (back-end)
## T2.1 Edwin
Implémenter une application dorsale
- [x] Commencé
- [x] Fait
  
## T2.2 Edwin
Il devra être possible d'accéder à l'application web au moyen de l'application dorsale,
c'est-à-dire via une URL servie par votre serveur web (par exemple, http://localhost:8080/). Votre
serveur web devra servir l'ensemble des ressources demandées (ex., HTML, CSS, JS, images, etc.).
- [x] Commencé
- [] Fait

# T3: Vue des Statistiques de comptages vélos
## T3.1 Maxime
La vue Statistiques des comptages vélos devra s’afficher lorsque l’utilisateur cliquera sur l’un
des liens/buttons Statistiques d’un compteur, et que l’utilisateur saisit les dates de recherche
souhaités. Vous devez inclure un bouton de retour vers l’arrière. Si ce bouton est cliqué, la page “Comptages de vélos” est affiché.
- [x] Commencé
- [] Fait
## T3.2 Maxime
La vue Statistiques des comptages vélos doit afficher des informations sur la période
recherchée (début et fin) et un graphique avec les informations concernant le nombre de passages le long de la période recherchée. Voir l’Annexe 2.
- [x] Commencé
- [] Fait
## T3.3 Maxime
Vous devez ajouter une option qui permet à l’utilisateur de choisir l’échelle du graphique (jours, semaines, mois)
- [x] Commencé
- [] Fait

# T4: API dorsale pour les comptages vélos
## T4.1 Edwin
Intégrer les fichiers fournis pour créer une API qui répondra aux requêtes AJAX provenant du front-end.

- [x] Commencé
- [x] Fait

## T4.2 Edwin
Implémenter une première version de l’API compteur.
- [x] Commencé
- [x] Fait
