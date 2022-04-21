import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {End, sendUserScore} from '../../actions';
import { useNavigate } from 'react-router-dom';
import './style.css'
// import axios from 'axios';



const QuizQuestions = () => {
    const UserName = useSelector(state => state.result[0].UserName);
    const [questions, setQuestions ] = useState();
    let [round, setRound] = useState(0); // re-render the questions, start with the 1st question
    const NumOfQuestion = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const level =  useSelector(state => state.difficulty);
    const UsersScore = useSelector(state=> state.result);
    let Score = UsersScore.find(user => user.UserName == UserName).Score;
    const EndGame = useSelector(state=>state);
    const navigateTo = useNavigate();
    const dispatch = useDispatch();

    let result;

    

    const fetchQuestions = async () => {
        const response = await fetch (`https://opentdb.com/api.php?amount=${NumOfQuestion}&category=${category}&difficulty=${level}&type=multiple`);
        const data = await response.json();
        /*data.results.forEach((data) => {
            setQuestion((prevState) => ({ ...prevState, [data.question] : [data.correct_answer] [data.incorrect_answers]}))
            result.push(data);
        })*/
        result = data.results;
        //console.log(`Data is: ${data}`);
        setQuestions(result);
    }

    useEffect(() => {
        fetchQuestions();
        console.log(questions);
    }, [])
    

    const renderQuestion = () => {if(questions != undefined){
        console.log(questions[round])
        return <>
          <strong>
            <p>{questions[round].question}</p>
          </strong>
          {renderAnswer(questions[round])}
        </>
      ;}}

    // shuffle our array below 'allAnswers' containing all candidate answers                    
    function shuffle(array) {
        let currentIndex = array.length,  randomIndex;
        // While there remain elements to shuffle.
        while (currentIndex != 0) {

            // Pick a remaining element.
            randomIndex = parseInt(Math.floor(Math.random() * currentIndex));
            currentIndex--;

            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
        return array;
    }

    let submit = "";

    const fetchEnd = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(EndGame)
    };
    
  
    // handle the answers for every quiz
    const handleSubmit = async e => {
        e.preventDefault();
        

        // if the answer is right
        if(submit == questions[round].correct_answer){
            Score++;
            dispatch(sendUserScore({UserName, Score}))
            console.log(Score);
            console.log(`your answer is: ${submit}`)
            console.log(`you gave the correct answer: ${submit}`)
        }else{
            // if the answer is wrong
            console.log(`the right answer is: ${questions[round].correct_answer}`)
            console.log(`you gave the wrong answer: ${submit}`)
            
        }


        if(round == (NumOfQuestion-1)){
            console.log("game ended");
            console.log(EndGame);
            await fetch('http://localhost:3030/games/save', fetchEnd)
                .then(response => response.json())
                .then(navigateTo("/End"));
        }
        setRound(round++);
        console.log(round);
    }

    const handleInput = e => {
        const input = e.target.value;
        submit = input;
        console.log(submit)
    }

    const renderAnswer = (Q) => {if(questions != undefined){
        const allAnswers = Q.incorrect_answers;
        allAnswers.push(Q.correct_answer);
        const shuffledAnswered = shuffle(allAnswers);
        let uniqueShuffled = [...new Set(shuffledAnswered)]; // https://stackoverflow.com/a/33121880
        //console.log(uniqueShuffled);
        // for(i=0; i<=allAnswers.length; i++){
        //     return allAnswers[i]
        // }
        return (
            <> 
                <div className=''>
                    <form onSubmit={handleSubmit} className="">
                        {uniqueShuffled.map( (Q) =>
                                <>
                                <input type="radio" id={Q} className ="answer" name="answer" value={Q} onChange={handleInput}/>
                                <label for={Q}>{Q}</label>
                                </>       
                        )}
                        <br></br><br></br>        
                        <input type="submit" value="Submit"/>  
                    </form>
                </div>
                <br></br>
                  
            </>
        )
        ;}}
    
    
        return (
            <section role="" className="">
                <>
                <h2>You Quiz Game:</h2>
                {/* <h3>You selected <i>{NumOfQuestion}</i> questions of the <i>'{questions[round].category}'</i>  category in <i>{level}</i> difficulty level!</h3> */}
                <p id="question" name="question" className="question">
                    {renderQuestion()}
                    
                </p>
                
                </>
            </section>
        )
}


export default QuizQuestions;
