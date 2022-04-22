// const MongoClient = require("mongodb/lib/mongo_client");

const { MongoClient } = require("mongodb");

describe('db test', () => {
    let connection;
    let db;
    beforeEach(async () => {
        await db.collection('game').deleteMany({});
        console.log('resetting db')
    })
    beforeAll(async () => {
        connection = await MongoClient.connect(global.__MONGO_URI__, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        db = await connection.db(global.__MONGO_DB_NAME__)
    });
    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await connection.close()
    })
    // test server running

    //should returning all games
    it('should get all games', async () => {
        const game = db.collection('game')
        const mockGame = {
            roomId : 1,         
            questions: 10, 
            category : "13",
            difficulty : "easy",
            result: [
             { name: "Heather", score: 9}
             
            ] }
        const mockGameTwo = {
            roomId: 2,
            questions: 5, 
            category : "12",
            difficulty : "hard",
            result: [
                    { name: "Kelvin", score: 4}
                    ]
             }

        const mockreturn = [
            {
                roomId : 1,         
                questions: 10, 
                category : "13",
                difficulty : "easy",
                result: [
                 { name: "Heather", score: 9}
                ] },    
                {
                    roomId: 2,
                    questions: 5, 
                    category : "12",
                    difficulty : "hard",
                    result: [
                            { name: "Kelvin", score: 4}
                            ]
                     }
        ]
        await game.insertOne(mockGame);
        await game.insertOne(mockGameTwo);
        const insertedGames = await game.find().toArray();
        expect(insertedGames).toEqual(mockreturn);
    })

    it('should get one room', async () => {
        const game = db.collection('game')
        const mockGame = {
            roomId : 1,         
            questions: 10, 
            category : "14",
            difficulty : "medium",
            result: [
             { name: "Heather", score: 9}
             
            ] }
        const mockGameTwo = {
            roomId: 2,
            questions: 5, 
            category : "7",
            difficulty : "Easy",
            result: [
                    { name: "Ikenna", score: 5}
                    ]
             }

        const mockreturn = [{
            roomId: 2,
            questions: 5, 
            category : "7",
            difficulty : "Easy",
            result: [
                    { name: "Ikenna", score: 5}
                    ]
             }]
        await game.insertOne(mockGame);
        await game.insertOne(mockGameTwo);
        const insertedGame = await game.find({roomId: 2}).toArray();
        expect(insertedGame).toEqual(mockreturn);
    })

    // should create a new game
    it('should create a new game', async () => {
        const game = db.collection('game')
        const mockGame = {
            roomId : 6,         
            questions: 20, 
            category : "4",
            difficulty : "easy",
            result: [
             { name: "Heather", score: 9}
             
            ] }
        await game.insertOne(mockGame);
        const insertedGame = await game.findOne({ roomId: 6 });
        expect(insertedGame).toEqual(mockGame);
    })
})
