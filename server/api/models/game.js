const {init} = require('../dbConfig');
/* const { ObjectId } = require('mongodb'); */

class Game {
    constructor(data){
        this.id = data.id;
        this.roomId = data.roomId;
        this.questions = data.questions;
        this.category = data.category;
        this.difficulty = data.difficulty;
        this.result= new Object(data.result);
    };

    static get allGames(){
        return new Promise (async (resolve, reject) => {
            try {
                let db = await init();
                // let result = await db.collection("game").find({}).toArray();
                let result = await db.collection("game").find().toArray();
                console.log(result);

                const resultAll = result.map(d => new Game({ ...d, id: d._id }));
                resolve(resultAll);
                console.log(resultAll);

            } catch (err) {
                console.log(err);
                reject(`Error retrieving all games!, error: ${err}`);
            }
        })
    };


};

module.exports = { Game };
