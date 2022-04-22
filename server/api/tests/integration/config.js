const MongoClient = require("mongodb/lib/mongo_client");

let db;
let connection;

const resetTestDB = () => {
    return new Promise (async (resolve, reject) => {
        try {
            connection = await MongoClient.connect(process.env.DB_CONNECTION);
            db = await connection.db(process.env.DB_NAME)
            await db.collection('game').deleteMany({});
            await db.collection('game').insertMany([
                {
                    roomId : 6,          
                    questions: 10, 
                    category : "Sports",
                    difficulty : "Medium",
                    result: [
                         { name: "Heather", score: 9},  { name: "Kelvin", score: 8},
                         { name: "Ikenna", score: 8},  { name: "Dimitris", score: 8}
                            ]
                    },
            ])
            resolve('Test DB reset');
        } catch (err) {
            reject(`Test DB could not be reset: ${err} in ${err.file}`);
        };
    });
}

module.exports = { resetTestDB }
