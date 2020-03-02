# Regionsproj

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.12  and latest [Angular version 9], [NgRx version 8.6.0], [Bootstrap ]

## To Installation instructions
npm i 

## To Start the Application

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.



## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


## Description
State of the App is managed by NgRx. To see the state of the App in the chrome browser, feel free to install the chrome extension for 'Redux dev tools'. This App has two states Regions and Countries. Actions are being dispatched to Load the regions and fetch countries by the region name.
Selectors are being used to cache the Regions and the associated countries.

The whole App is Unit Tested - for every component and service
- Further Improvements - as below: 

- More unit Tests can be added to Test - 
- Reducers
- Selectors
- Effects - Using Marble Testing

- End to End Tests can be written using Cypress.
https://www.cypress.io/ 
