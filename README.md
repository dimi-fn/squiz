# SQUIZ

Contributors: 
* [Heather McGlynn](https://github.com/HevvsOlivia)
* [Ikenna Agulobi](https://github.com/ike-agu)
* [Kelvin Won](https://github.com/kelvin6118)
* [Dimitris Fanis](https://github.com/dimi-fn)

---------

# Project Description


-------

# Process

* Used Github's [kanban board](https://github.com/dimi-fn/squiz/projects/2) to manage the project workflow
* Used [excalidraw](https://excalidraw.com/#room=e8ea7cb359dd44038d8f,NWTbp2wAp44yK9gqYUyc2g) to draw the initial layout of the app
* Used Figma(https://www.figma.com/file/DC7IMmnU5CezMF6N21vpnz/squiz?node-id=0%3A1) as a prototype tool for our project

-------

# Functionalities

-------

# Installation & Usage

Navigate to the root path of the project files and run: 

        bash _scripts/startContainer.sh

That command will:
* activate `server` for the API and the `Mongo Database` on the backend running on *localhost:3030*
* activate the communication channel between client and server via `Socket.IO` on the backend running on *localhost:5000*
* activate the `client` side running on *localhost:3000*

For more analytical guidance follow the following subsections:

## Server

### API

* In order to activate the server side open your terminal, navigate to the root path of the project files and run: 

        bash _scripts/startContainer.sh

The command above will install all necessary dependencies and packages, and will activate the server on *localhost:3030* integrated with the MongoDB database. 

* `bash _scripts/stopContainer.sh`: stop the server
* `bash _scripts/teardownContainer.sh`: stop the server and teardown by removing all running services in containers as well as by removing volumes

### Socket.IO

The command executed in the API subsection above will also activate socket.io on *localhost:5000*

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

* `bash _scripts/startContainer.sh` will activate client on *localhost:3000* (along with the api and database)

-------

# Technologies

* HTML/CSS/JavaScript
* React
* Socket.io for multi-user functionality
* (Jest for testing)
* MongoDB for database
* Docker for containerization

-------

# Wins & Challenges

-------

# License
