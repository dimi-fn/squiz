# SQUIZ

[![MIT license](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/mit-license.php)

Contributors:
* [Heather McGlynn](https://github.com/HevvsOlivia)
* [Ikenna Agulobi](https://github.com/ike-agu)
* [Kelvin Wong](https://github.com/kelvin6118)
* [Dimitris Fanis](https://github.com/dimi-fn)

---------

# Project Description

* Online quiz game where users can start a quiz and compete with other players to see who knows the most trivia  
* The host creates the game, choosing player number, question category, question number, and difficulty level 
* Other users can join game with a game ID
* At end of quiz, players can see their score

-------

# Process

* Used Github's [kanban board](https://github.com/dimi-fn/squiz/projects/2) to manage the project workflow
* Used [excalidraw.com](https://excalidraw.com/#room=e8ea7cb359dd44038d8f,NWTbp2wAp44yK9gqYUyc2g) to draw the initial layout of the app
* Used [Figma](https://www.figma.com/file/DC7IMmnU5CezMF6N21vpnz/squiz?node-id=0%3A1) as a prototype tool for our project

-------

# Functionalities

-------

# Installation & Usage

Navigate to the root path of the project files and run:

        bash _scripts/startContainer.sh

That command will create four containers, and:
* activate `server` for the API and the `Mongo Database` on the backend running on *localhost:3030*
* activate the communication channel between client and server via `Socket.IO` on the backend running on *localhost:5000*
* activate the `client` side running on *localhost:3000*

For more analytical guidance follow the following subsections:

-----

## Server

The server API is currently hosted at https://quiz-squiz.herokuapp.com/

### API

* In order to activate the server side open your terminal, navigate to the root path of the project files and run:


The command above will install all necessary dependencies and packages, and will activate the server on *localhost:3030* integrated with the MongoDB database.

* `bash _scripts/stopContainer.sh`: stop the server
* `bash _scripts/teardownContainer.sh`: stop the server and teardown by removing all running services in containers as well as by removing volumes

Alternatively, open a terminal, navigate to the *server/api* directory and run:
* `npm i` or `npm install` to install the necessary dependencies
* `npm run dev` 

### API Endpoints

| Route | HTTP Verb  | Description |
|------|------|-----|
| `localhost:3030/games` | GET  |it retrieves all information from the *game* collection | 
| `localhost:3030/games/room/<id>` | GET | it retrieves all information based on the given *room id* | 
| `localhost:3030/games/save` | POST |it posts data inserting a new game|


### Socket.IO

The command executed in the API subsection above will also activate the Socket.IO on *localhost:5000*

------

## Database

In order to enter to our mongo database from the terminal:
* Navigate to the root directory of the project and run:

        bash _scripts/enterMongoDB.sh

    * If you are on Windows then you might need to run:
        * `bash _scripts/enterMongoDBFromWindows.sh`

* Alternatively, navigate to the root directory of the project and run:

        docker exec -it squiz_dev_db mongo -u squiz -p squiz_db_pass

    * If you are on Windows you might need to alter the command above by adding "winpty" in the beginning: `winpty docker exec -it squiz_dev_db mongo -u squiz -p squiz_db_pass`

### Usage
* `show dbs` to print a list of all databases on the server
* `use squiz_db` to use the *squiz_db* database
* `show collections` to print a list of collections for the current database
* `db.game.find()` to find all documents of our *game* collection
* For a collection of more mongo shell commands you can visit the [mongodb manual reference](https://www.mongodb.com/docs/manual/reference/mongo-shell/).

## Client

* `bash _scripts/startContainer.sh` will activate client on *localhost:3000* (along with the API and database)

* The frontend was constructed with [Create React App](https://github.com/dimi-fn/squiz/blob/main/client/README.md)

* Here you can open the project on Netlify: https://squiz-your-brain.netlify.app/

# Testing

* Current test results:
	* Backend: 37% coverage
	* Client: 27% coverage

In order to run the backend tests, navigate to the `server/api` directory and:
* run `mpm install`
* run `npm run coverage`

In order to run the frontend tests, navigate to the `client` directory and:
* run `mpm install`
* run `npm run coverage`

        
-------

# Technologies

* HTML/CSS/JavaScript
* React, Redux
* Socket.IO for multi-user functionality
* Jest for testing
* MongoDB for the database
* Docker for containerization

-------

# Wins & Challenges

## Wins

* Successfully created four containers running the server API, the server for Socket.IO, the mongoDB database, and the client side
* Set up a mongoDB database
* Set up a separate Socket.IO server sending a message on client side upon connection

## Challenges

# Future Features & Future Work

* Multi-user quiz game room with the integration of websockets like Socket.IO
* Decode the special characters from the quiz questions coming from the Trivia API

-------

# Licence

* [MIT License](https://opensource.org/licenses/mit-license.php)
