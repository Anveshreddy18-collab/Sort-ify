# Sort-ify
A static site written in Javascript that visualizes popular sorting algorithms.

## Description
Sortify is JS app that is meant to convey the important concepts behind sorting algorithms. The app's main feature is it's sorting visualizer which currently supports Bubble Sort, Merge Sort, and Quick Sort. It offers varying array lengths for the visualization and boasts a clean UI to help the client understand the broader CS concept of sorting. It also houses an auxiliary page with an overview of this information on these algorithms as well as a list of resources that were helpful in the creation of the projects  
Landing Page             |  Visualizer
:-------------------------:|:-------------------------:
![](https://dl.dropboxusercontent.com/s/9wfu1mpxx39qbyj/Landing.png?dl=0)  |  ![](https://dl.dropboxusercontent.com/s/erqicrzfrnv2dw7/App.png?dl=0)

## Features
* UI written in modern __React__, using ES6 principles and functional components with React Hooks
* Local frontend state management with the Context API
* UI written exclusively with custom CSS styling 
* Bootstrapped with create-react-app
* Backend written in __NodeJS/Express__
* Relational data storage with __PostgreSQL__
* User details managed with HTTPS REST architecture
* Sessions managed with local storage

## Installation
* Install PostgreSQL and create a db named trelloclone and create tables with queries in ```server\data.sql```
* Clone this repository ```https://github.com/jackbisceglia/trello-clone.git```
* Update Postgre user details in ```server\db.js```
* Run ```npm install``` in both ```server``` and ```react-frontend ``` to install dependencies
* cd into ```server``` and ```react-frontend```, and ```npm start``` respectively to spin API and Frotend servers
* Frontend should be running on ```http://localhost:3000``` and Express API on ```http://localhost:5000```

## Live App
https://trello-clone-jackb.netlify.app/
Sign up or use demo account:
* __Email__: demo@gmail.com
* __Password__ Demo123 (case-sensitive)

  # Access
  Sort-ify is available at https://jackbisceglia.github.io/Sort-ify/
