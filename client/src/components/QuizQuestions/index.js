import React, {useState, useEffect} from 'react';




const QuizQuestions = () => {

const [question, setQuestion] = useState('');

const fetchQuestions = async () => {
    // const response = await fetch (`https://opentdb.com/api.php?amount=${form.questionNum.value}&category=${form.category.value}&difficulty=${form.level.value}$type=multiple`);
    const response = await fetch (`https://opentdb.com/api.php?amount=2&category=9&difficulty=easy&type=multiple`);
    const data = await response.json();
    data.results.forEach((data) => {
        setQuestion((prevState) => ({ ...prevState, [data.question] : [data.correct_answer] [data.incorrect_answers]}))
    })
    console.log(data);
}


const allQuestions = Object.keys(question).map((ques) => {
    return (
            <option key={ques} value={ques}>
            {question[ques]}
            </option>
    )
});

useEffect(() => {
    fetchQuestions();
}, [])

    return (
        <section role="">
            <>
            <h2>You Quiz Game:</h2>
            <p id="question" name="question" className="question">
                {allQuestions}
            </p>
            
            </>
        </section>
    )

}


export default QuizQuestions;
