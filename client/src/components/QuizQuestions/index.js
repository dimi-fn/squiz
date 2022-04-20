import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';



const QuizQuestions = () => {
    const [question, setQuestion] = useState('');
    const [questions, setQuestions ] = useState();
    //const [answers, setAnswers] = useState('');
    const NumOfQuestion = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const level =  useSelector(state => state.difficulty);
    let result = [];
    

    const fetchQuestions = async () => {
        const response = await fetch (`https://opentdb.com/api.php?amount=${NumOfQuestion}&category=${category}&difficulty=${level}&type=multiple`);
        //const response = await fetch (`https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple`);
        const data = await response.json();
        data.results.forEach((data) => {
            setQuestion((prevState) => ({ ...prevState, [data.question] : [data.correct_answer] [data.incorrect_answers]}))
            result.push(data);
        })
        console.log(`Data is: ${data}`);
        setQuestions(result);
    }

    useEffect(() => {
        fetchQuestions();
    }, [])
    console.log(questions)
    //console.log(questions);
    const renderQuestion = () => {if(questions != undefined){return questions.map((Q) => (
      <>
        <strong>
          <p>{Q.question}</p>
        </strong>
        {renderAnswer(Q)}
      </>
    ));}}

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

    const renderAnswer = (Q) => {if(questions != undefined){
        const allAnswers = Q.incorrect_answers;
        allAnswers.push(Q.correct_answer);
        const shuffledAnswered = shuffle(allAnswers);
        let uniqueShuffled = [...new Set(shuffledAnswered)]; // https://stackoverflow.com/a/33121880
        console.log(uniqueShuffled);
        // for(i=0; i<=allAnswers.length; i++){
        //     return allAnswers[i]
        // }
        return uniqueShuffled.map( (Q) =>
        <p key={Q.id}>{Q}</p>
        );}}
    
    
        return (
            <section role="">
                <>
                <h2>You Quiz Game:</h2>
                <p id="question" name="question" className="question">
                    {renderQuestion()}
                    
                </p>
                
                </>
            </section>
        )
}


export default QuizQuestions;
