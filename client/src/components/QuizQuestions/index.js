import React, {useState, useEffect} from 'react';
import { useSelector } from 'react-redux';
// import axios from 'axios';



const QuizQuestions = () => {
    const [questions, setQuestions ] = useState();
    //const [answers, setAnswers] = useState('');
    const NumOfQuestion = useSelector(state => state.questions);
    const category = useSelector(state => state.category);
    const level =  useSelector(state => state.difficulty);
    let result;
    // let result=[]; 
    

    const fetchQuestions = async () => {
        const response = await fetch (`https://opentdb.com/api.php?amount=${NumOfQuestion}&category=${category}&difficulty=${level}&type=multiple`);
        //const response = await fetch (`https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple`);
        const data = await response.json();
        /*data.results.forEach((data) => {
            setQuestion((prevState) => ({ ...prevState, [data.question] : [data.correct_answer] [data.incorrect_answers]}))
            result.push(data);
        })*/
        result = data.results;
        console.log(`Data is: ${data}`);
        setQuestions(result);
    }

    useEffect(() => {
        fetchQuestions();
    }, [])
    
    
    //console.log(questions);
    /*const renderQuestion = () => {if(questions != undefined){return questions.map((Q) => (
      <>
        <strong></strong>
          <p>{Q.question}</p>
        </strong>
        {renderAnswer(Q)}
      </>
    ));}}*/

     // assign the rendering of questions, display each question and its answers each time
     let round = 0;

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

    // handle the answers for every quiz
    const handleSubmit = e => {
        e.preventDefault();
        if(submit == questions[round].correct_answer){
            console.log(`correct answer ${submit}`)
        }else{
            console.log(`the right answer is: ${questions[round].correct_answer}`)
        }
    }

    const handleInput = e => {
        const input = e.target.value;
        submit = input;
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
        return (
            <> 
                <div className=''>
                    <form onSubmit={handleSubmit}>
                        {uniqueShuffled.map( (Q) =>
                                <>
                                <input type="radio" id={Q} className ="answer" name="answer" value={Q} onChange={handleInput}/>
                                <label for={Q}>{Q}</label>
                                </>       
                        )}
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
