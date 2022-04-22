const gameController = require('../../../controllers/games')
const Game = require('../../../models/game');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('Game controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('getAll', () => {
        test('it returns Games with a 200 status code', async () => {
            let testGames = [{
                roomId: 3,
                questions: 5,
                category: "9",
                difficulty : "medium",
                result: [
                    { name: "Heather", score: 9}
                       ]
            }]

            jest.spyOn(Game,'getAll')
                 .mockResolvedValue(testGames);
            await gameController.getAll(null, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(testGames);
        })
    });

    describe('insertGame', () => {
        test('it creates a new Game with a 201 status code', async () => {

            let testGame = [{
                roomId: 9,
                questions: 4,
                category: "5",
                difficulty : "easy",
                result: [
                    { name: "Heather", score: 9}
                       ]
            }]
            
            jest.spyOn(Game, 'insertGame')
                .mockResolvedValue(new Game(testGame));   
            const mockReq = { body: {
                roomId: 9,
                questions: 4,
                category: "5",
                difficulty : "easy",
                result: [
                    { name: "Heather", score: 9}
                       ]
            } }
            await gameController.createNewGame(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Game(testGame));
        })
    });

    describe('findByRoomId', () => {
        test('it returns a Game with a 200 status code', async () => {
            let testGame = [{
                roomId: 9,
                questions: 4,
                category: "5",
                difficulty : "easy",
                result: [
                    { name: "Heather", score: 9}
                       ]
            }]
            jest.spyOn(Game, 'findByRoomId')
                .mockResolvedValue(new Game(testGame));  
                 
            const mockReq = { params: {roomID: 9} }

            await gameController.getGame(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Game(testGame));
        })
    });
        
})
