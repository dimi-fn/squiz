const {init} = require('../dbConfig');
const { ObjectId } = require('mongodb'); 

class Game {
    constructor(data){
        this.id = data.id;
        this.roomId = data.roomId;
        this.questions = data.questions;
        this.category = data.category;
        this.difficulty = data.difficulty;
        this.result= data.result;
        // this.result= new Object(data.result);
    };

    static get getAll(){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                // let result = await db.collection("game").find({}).toArray();
                const result = await db.collection("game").find().toArray();
                console.log(`result is: ${result}`);

                const allResults = result.map((d) => new Game(d));

                resolve(allResults);
                console.log(allResults);

            } catch (err) {
                console.log(err);
                reject(`Error retrieving all games!, error: ${err}`);
            }
        })
    };

};

module.exports =  Game;
