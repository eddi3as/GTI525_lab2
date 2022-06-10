# Labo 2 BE

## Prerequisites

#### Node.js
#### Angular CLI 
#### MongoDB 

- Install <b>MongoDB Community Server with Compass</b> from https://www.mongodb.com/try/download/community
(under On-premises  MondoDB locally)
- Install <b>The MongoDB Database Tools</b> https://www.mongodb.com/try/download/database-tools
- Create a db called <b>gti525</b>
- Create collection <b>fontaines, compteurs, stats</b>

use a terminal to import excel for fontaines and compteurs <b> use the csv from this project folder</b>

- navigate to the bin folder of the MongoDB Database Tools
  <b>ex: cd C:\Program Files\MongoDB\Tools\100\bin</b>
#### run commands:
    mongoimport --db=gti525 --collection=fontaines --type=csv --headerline --file=...path to fontaines csv
    mongoimport --db=gti525 --collection=compteurs --type=csv --headerline --file=...path to compteurs csv


## Getting started with this App

#### run commands:
    npm install
    npm run build
    npm run start
##### You should get:
    Successfully connected to database: gti525 and collection: stats
    waiting for localhost...
    Serveur disponible à http://localhost:3000 (this step may be long the first time as it is loading the stats)
