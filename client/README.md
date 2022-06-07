# Labo1

## Prerequisites

#### Node.js
#### Angular CLI 
use a terminal in visual studio code and run command:
npm install -g @angular/cli

## Getting started with this App
- pull project from Github
- run npm install to get all ressources needed
- run ng serve 
- go to `http://localhost:4200/`

#### Steps for new component
- ng generate <component_name>
- create service if need be
- import dependencies is ts file
- modify the html and css
- add component to app.component.html like:
  <app-component_name></app-component_name>
- ng serve to see if still compiles

## Further help

Examples of components use:

https://stackblitz.com/run?file=src%2Fapp%2Fapp.component.html


# Issues


- ng : file path\... cannot be loaded because running scripts is disabled on this system

Will need to run powershell in admin mode and type run cmd: 

Set-ExecutionPolicy -ExecutionPolicy Unrestricted


https://stackoverflow.com/questions/58880139/electron-node-js-ng-file-path-ng-ps1-cannot-be-loaded-because-running-scri


This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

