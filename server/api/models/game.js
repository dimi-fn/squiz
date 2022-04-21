const {init} = require('../dbConfig');
const { ObjectId } = require("mongodb"); 
// "_id" : ObjectId("62612864db59e0649615e0f7")
/*const bodyParser = require ('body-parser');*/

class Game { 
    constructor(data){
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

    // static getRoomResults(room_id){
    //     return new Promise(async (resolve, reject) => {
    //         try{
    //             const db = await init();
    //             // const results= await db.collection("game").find({roomId:room_id}).toArray();
    //             const results= await db.collection("game").find({roomId:room_id});
    //             console.log(`Room id is: ${room_id}`)
    //             // const results= await db.collection("game").find({roomId: ObjectId(roomId)}).toArray();
    //             resolve(results)
    //         } catch (err){
    //             console.log(err)
    //             reject(`Couldn't get room results, error: ${err}`)
    //         }
    //     })
    // }

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

}

module.exports =  Game;
