// connect to mongodb
const db = connect("mongodb://localhost:27017/squiz_db");

db.game.drop();

/* 
* game id changes when the quiz game ends and a new game starts
* score = (number of correct answers/total number of questions)
*/
db.game.insertMany([

    {
    roomId : 1,          
    questions: 10, 
    category : "Sports",
    difficulty : "Medium",
    result: [
         { name: "Heather", score: 9},  { name: "Kelvin", score: 8},
         { name: "Ikenna", score: 8},  { name: "Dimitris", score: 8}
            ]
    },    

    {
    roomId: 2,
    questions: 5, 
    category : "Art",
    difficulty : "Easy",
    result: [
            { name: "Heather", score: 5},  { name: "Kelvin", score: 4},
            { name: "Ikenna", score: 5},  { name: "Dimitris", score: 3}
            ]
}
]);

