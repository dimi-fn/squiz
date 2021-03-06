const {init} = require('../dbConfig');
const { ObjectId } = require("mongodb"); 

// "_id" : ObjectId("62612864db59e0649615e0f7")
/*const bodyParser = require ('body-parser');*/

class Game { 
    constructor(data){
        // this.id = data._id
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

    /*
    static findById(id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                let gameData = await db.collection("game").find({ _id: ObjectId(id) }).toArray()
                let game = new Game({ ...gameData[0], id: gameData[0]._id});
                resolve(game)
            } catch (err) {
                console.log(err);
                reject(`Game not found, error: ${err}`);
            }
        })

    }
    */


    static  findByRoomId(room_id){
        return new Promise (async (resolve, reject) => {
            try {
                const db = await init();
                // let result = await db.collection("game").find({}).toArray();
                const result = await db.collection("game").find({roomId: parseInt(room_id)}).toArray();
                
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

    // update or insert information about the room
    static insertGame(roomId, questions, category, difficulty, result) {
        return new Promise (async (resolve, reject) => {
            try {

                // if there some data is missing then throw an error
                if (!roomId || !questions || !difficulty || !result){
                    throw new Error("Data mismatch between sent data and database schema")
                };
                const db = await init();
                let roomDocument = await db.collection("game").insertOne({ 
                                        roomId: roomId,
                                        questions: questions,
                                        category: category,
                                        difficulty: difficulty,
                                        result: result})                            
                } catch (err) {
                    reject(`Error inserting game: error ${err}`)
            }
        });
    }; 

};   

module.exports =  Game;
