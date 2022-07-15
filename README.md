# GTI525 Labo 3
## Setup for Eco Velo
## Frontend
#### DEV
    npm install
    ng serve
#### PROD
    ng build
## Backend 
#### DEV
    npm run start-dev
#### PROD
(SSR is now enabled view SERVER README)

<b>ng build (RUN THIS CMD in client first)</b>

    npm install 
    npm run build
    npm run start


# T1: API REST

## T1.1 Edwin
Dans le deuxième livrable, vous avez commencé à implémenter une API REST pour servir les informations des passages vélos. Nous allons garder le même point de terminaison (endpoint) racine, mais le comportement de l’API changera légèrement. Pour rappel, le point de terminaison racine de l’API est composé par :

- Le nom d'hôte
- Le code gti525
- La version de l'API

Exemple : http://localhost:8080/gti525/v1/

Lorsqu’une requête GET est lancée au point de terminaison racine, votre API doit fournir un JSON qui contient tous les points de terminaison des ressources servies par l’API REST (par ex., les points de terminaison pour les ressources compteurs et pour les points d'intérêt). 

## T1.2 Edwin
Vous devez réusiner le comportement de la ressource compteurs. Une requête pour obtenir le contenu du chemin gti525/v1/compteurs doit renvoyer un JSON qui contient la liste des compteurs avec les informations nécessaires pour remplir la vue que vous avez implémentée dans la première phase du laboratoire et pour laquelle les données ont probablement été codées dans un fichier JavaScript (ID, nom du compteur, statut, année d'implantation, etc) - voir Annexe 1. 


Le chemin pour accéder aux ressources compteurs:

- Le mot-clé compteurs.
- Paramètre limite pour limiter le nombre d’entrées fournies dans la réponse (optionnel).

Exemple : /gti525/v1/compteurs?limite=10 
T1.3: Pour cette tâche vous allez probablement réusiner votre implémentation proposée pour la deuxième phase du projet. Une requête pour le chemin compteurs/:id (où id est l’identifiant d’un compteur) doit retourner les informations sur compteur (celui identifié par id), mais pas le nombre des passages enregistrés. Ce comportement est décrit dans la tâche suivante.   

    Exemple : /gti525/v1/compteurs/100041114


## T1.4 Edwin
Pour consulter le nombre de passages enregistrés par un compteur pendant une certaine période, vous allez implémenter le chemin compteurs/:id/passages. Le point de terminaison et les paramètres sont décrits ci-dessous :

- Chemin compteurs/:id/passages
- Paramètres de début et fin de la période recherchée (début et fin).
- Paramètre limite pour limiter le nombre d’entrées fournies dans la réponse (optionnel).

Exemple : 

    /gti525/v1/compteurs/100041114/passages?debut=20200101&fin=20200131&limite=10

## T1.5 Edwin
Vous devez implémenter aussi la ressource pointsdinteret dans l’API REST, ce qui permettra autant de consulter les points d’intérêts pertinents aux cyclistes (des fontaines à boire et des ateliers de réparation vélo) que d’ajouter un nouveau point d’intérêt. Le point de terminaison et les paramètres sont décrits ci-dessous :

- Point de terminaison pointsdinteret
- Identifiant :id pour consulter les détails d’un point d'intérêt donné (optionnel).
- Paramètre limite pour limiter le nombre de points fournis dans la réponse (optionnel).
- Paramètre type pour retourner les points d'intérêt d’un certain type.
- Paramètre nom pour retourner les points d'intérêt qui contiennent la chaîne de caractères fournie dans leur nom. Vous pouvez utiliser des expressions régulières si vous le souhaitez.

 Exemples : 

    /gti525/v1/pointsdinteret?limite=5 : les 5 premiers points d'intérêts 
    /gti525/v1/pointsdinteret/1 : les détails du point d'intérêt dont l’identifiant est 1
    /gti525/v1/pointsdinteret?type=fontaine : les points d'intérêts type fontaine à boire
    /gti525/v1/pointsdinteret?type=atelier&limite=5 : les 5 premiers points d'intérêts type atelier
    /gti525/v1/pointsdinteret?type=fontaine&nom=Saint-Martin : les fontaines qui contiennent Saint-Martin dans leur nom/description

## T1.6 Edwin
Pour la ressource pointsdinteret, vous devez implémenter aussi la fonctionnalité qui permet d’ajouter un nouveau point d'intérêt via API REST. L’API doit accepter que l’application frontale fasse une requête HTTP dont le corps contient un JSON qui contient les détails du point d’intérêt à ajouter. Les besoins pour implémenter la fonctionnalité nécessaire côté frontal sont décrits dans la tâche T3.


# T2: Utilisation des données

## T2.1 Edwin
 Vous devez créer des tableaux ou équivalents (le terme dépend de votre choix de base de données), pour stocker les données des fichiers d’entrées fournis avec l’énoncé du livrable 1 ; c.-à-d., les informations sur les compteurs et sur les fontaines à boire. Votre conception doit permettre aux utilisateurs d’ajouter un nouveau point d’intérêt, tel qu’une nouvelle fontaine à boire ou un atelier de réparation vélo. 

## T2.2 Edwin
 Pour cette tâche, il faut créer un ou plusieurs tableau(x) ou équivalent(s) pour stocker les données fournies avec l’énoncé du livrable 2 ; c.-à-d., les informations des passages de vélos enregistrés pour chaque compteur.

## T2.3 Edwin
 En quelque sorte liée aux tâches T2.1 et T2.2, cette tâche consiste à bien utiliser les fonctionnalités disponibles dans la base de données. Autant que possible, les fonctionnalités de recherche fournies par l’API REST doivent s'appuyer sur les moyens fournis par la base de données que vous utilisez. Vous devez donc éviter de faire le filtrage des données via JavaScript car cela sera pris en compte dans l’évaluation.

# T3: Ajout et affichage de points d'intérets
Dans la première partie de ce projet, vous avez implémenté une vue pour afficher quelques informations sur les fontaines à boire disponibles dans la Ville de Montréal. Cette fonctionnalité, peu explorée dans la deuxième étape du projet, sera complétée dans le troisième livrable. En plus d’enregistrer les informations pertinentes aux fontaines à boire dans une base de données, tel que décrit à la tâche T2, vous allez implémenter une fonctionnalité qui permet aux utilisateurs de votre application d’ajouter un point d’intérêt, qu’il soit une nouvelle fontaine à boire ou un atelier de réparation vélo.

## T3.1 Maxime
Vous devez créer l'élément (div ou autre) dans l’application frontale qui contiendra le formulaire qui permettra aux utilisateurs d’ajouter un nouveau point d'intérêt. Le formulaire permettra aux utilisateurs d'ajouter une nouvelle fontaine à boire ou un atelier de réparation vélo. L’Annexe 2 vous donne un exemple de formulaire. Quelques informations peuvent ne pas être pertinentes aux deux types de points d'intérêt. Par exemple, pour les ateliers, l'adresse peut être suffisante pour trouver leur géolocalisation. Les fontaines à boire, par contre, sont généralement placées dans des parcs ou lieux publics, et l’adresse du parc n’est pas souvent suffisante pour les localiser. Vous devez afficher les champs pertinents au type de point d'intérêt choisi par l'utilisateur.

## T3.2
Également à ce que vous avez implémenté pour les capteurs dans la deuxième étape du projet, vous devez ajouter la fonctionnalité qui permet d’afficher un point d'intérêt sur une carte. Mais différemment du cas des compteurs, vous n’avez qu’à afficher un seul point d'intérêt à la fois sur la carte. L’Annexe 3 vous donne un exemple de cette fonctionnalité. Dans la vue des fontaines à boire/ateliers réparation, lorsque l’utilisateur clique sur l’icône  associée avec un point d'intérêt, ce dernier doit être sélectionné sur la liste, et la carte doit afficher un marqueur qui correspond au point choisi.

# T4: Gestion des jetons d'API (bonus)
Pour l'implémentation de l’API REST de ce projet, vous n’êtes pas obligés de gérer des jetons pour authentifier et pour autoriser les actions des utilisateurs. Les requêtes aux points de terminaisons de l’API n’ont pas besoin d’être authentifiées en utilisant des jetons envoyés dans les en-têtes des requêtes HTTP. Toutefois, dans des conditions réelles, votre application devrait fournir un niveau minimal de sécurité, et seulement les utilisateurs qui détiennent un jeton pourraient entreprendre certaines actions. Des points supplémentaires vous seront attribués si telle fonctionnalité est présente dans votre implémentation.

# T4.1 Edwin
Pour cette tâche vous devez implémenter un système pour autoriser ou refuser certaines actions des utilisateurs. Vous devez implémenter une fonctionnalité pour générer des jetons qui seront utilisés par l’API REST pour autoriser des actions des utilisateurs. Lorsqu’un utilisateur émet une requête HTTP pour accéder à une fonctionnalité de l’API REST, l’utilisateur doit fournir son jeton pour que l’action soit autorisée. Une action sans un jeton valable doit donc être refusée par l’API.  