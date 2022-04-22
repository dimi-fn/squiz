const request = require('supertest');
const app = require('../../server');
const resetTestDB = require('./config.js')


describe('Game endpoints', () => {
    let api;
    let game = {
        roomId: 3,
        questions: 5,
        category: "9",
        difficulty : "medium",
        result: [
            { name: "Heather", score: 9}
               ]
    }

    beforeEach(async () => {
        await resetTestDB.resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('Should check server up', async () => {
        const res = await request(api).get('/')
        expect(res.statusCode).toEqual(200)
    })


    it('Should get a game.', async () => {
        const res = await request(api).get('/games/room/3')
        expect(res.statusCode).toEqual(200)
        expect(res.body.roomId).toEqual(3)
        expect(res.body.questions).toEqual(5)
        expect(res.body.category).toEqual("9")
        expect(res.body.difficulty).toEqual("medium")
        //expect(res.body.result).toEqual([{ name: "Heather", score: 9}]);
    })
   
    // Should create new game.
    it('Should post new game', async () => {

        const res = await request(api)
            .post('/games/save')
            .send({
                roomID: 1,
                questions: 3,
                category: "26",
                difficulty : "easy",
                result: [
                    { name: "Kelvin", score: 5}
                ]
                })

        expect(res.statusCode).toEqual(201)

        expect(res.body).toHaveProperty("roomID")
        expect(res.body).toHaveProperty("questions")
        expect(res.body).toHaveProperty("category")
        expect(res.body).toHaveProperty("difficulty")
        expect(res.body).toHaveProperty("result")

        const userRes = await request(api).get('/games/1')
        expect(userRes.statusCode).toEqual(200);
        expect(userRes.body.roomId).toEqual(1)
    })

})
