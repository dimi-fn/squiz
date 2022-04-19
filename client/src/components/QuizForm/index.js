import React, {useState, useEffect} from 'react';

 export const QuizForm = () => {
    const [players, setPlayers] = useState("")
    const [ questions, setQuestions ] = useState('');
    const [ category, setCategory ] = useState('');
    const [ level, setLevel ] = useState('');
    
    const handleSubmit = e => {
        e.preventDefault();
        setPlayers(players);
        setQuestions(questions);
        setCategory(category);
        setLevel(level);
    };
    
    /* 
    *** https://opentdb.com/api_config.php ***

    - Returns the entire list of categories and ids in the database. 
    https://opentdb.com/api_category.php

    - Category Question Count Lookup: Returns the number of questions in the database, in a specific category.
    https://opentdb.com/api_count.php?category=CATEGORY_ID_HERE

    - Global Question Count Lookup: Returns the number of ALL questions in the database. Total, Pending, Verified, and Rejected.
    https://opentdb.com/api_count_global.php

    */

    const fetchCategories = async () => {
        const response = await fetch ('https://opentdb.com/api_category.php');
        const data = await response.json();
        data.trivia_categories.forEach((data) => {
            setCategory((prevState) => ({ ...prevState, [data.id] : data.name }));
        });
    };
    
    const allCategories = Object.keys(category).map((categ)=> {
        return (
            <option key={categ} value={categ}>
                {category[categ]}
            </option>
        )
    });

    useEffect(()=>{
        fetchCategories();
    }, [])
    
       

   
    /**************** Here goes the POST method to post the form data in backend *********/
    // const playGame = async (e) => {
    //     e.preventDefault();
    // }
    // const form = e.target;


    
    return(
    <form aria-label='form' onSubmit={handleSubmit}>
        

        <label htmlFor='playersNum'>Number of Players: </label>
        <input type="number" name="playersNum" id="playersNum" min="1" max="10" value={players || "1"} onChange={e => setPlayers(e.target.value)}/>

        <br></br><br></br>
        
        <label htmlFor='questionNum'>Number of Questions: </label>
        <input type="number" name="questionNum" id="questionNum" min="1" max="20" value={questions || "1"} onChange={e => setQuestions(e.target.value)}/>

        <br></br><br></br>

        <label htmlFor='categories'>Select a Category: </label>
        {/* <select classname="" id = "categories" name="categories" onChange={e => setCategory(e.target.value)}> */}
        <select id = "categories" name="categories">
            {allCategories}
        </select>
        
        
        <br></br><br></br>

        <label htmlFor='level'>Select Difficulty Level: </label> 
        <select id='level' name='level' onChange={e => setLevel(e.target.value)}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option> 
        </select>

        <br></br><br></br>
        
        <input type="button" value="Create Game"/>
        
    </form>
    )
};



