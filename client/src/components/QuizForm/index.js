import React, {useState, useEffect} from 'react';
import {sendGame} from '../../actions';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

 export const QuizForm = () => {
    const [players, setPlayers] = useState('1')
    const [ questions, setQuestions ] = useState('1');
    const [ categories, setCategories ] = useState('');
    const [ category, setCategory]  = useState('9');
    const [ level, setLevel ] = useState('easy');
    const dispatch = useDispatch();
    const navigateTo = useNavigate();
    
    const handleSubmit = e => {
        e.preventDefault();
        dispatch(sendGame({questions, category, level}));
        navigateTo('/Host');
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
            setCategories((prevState) => ({ ...prevState, [data.id] : data.name }));
        });
    };
    
    const allCategories = Object.keys(categories).map((categ)=> {
        return (
            <option key={categ} value={categ}>
                {categories[categ]}
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


    const handlePlayer = e => {
        const input = e.target.value;
        setPlayers(input);
    }
    const handleCategory = e => {
        const input = e.target.value;
        setCategory(input);
    }
    const handleLevel = e => {
        const input = e.target.value;
        setLevel(input);
    }
    const handleQuestions = e => {
        const input = e.target.value;
        setQuestions(input);
    }

    
    return(
    <form className="form" aria-label='form' onSubmit={handleSubmit}>
        

        <label htmlFor='playersNum'>Number of Players: </label>
        <input type="number" name="playersNum" id="playersNum" min="1" max="10" value={players || "1"} onChange={handlePlayer}/>

        <br></br><br></br>
        
        <label htmlFor='questionNum'>Number of Questions: </label>
        <input type="number" name="questionNum" id="questionNum" min="1" max="20" value={questions || "1"} onChange={handleQuestions}/>

        <br></br><br></br>

        <label htmlFor='category'>Select a Category: </label>
        {/* <select classname="" id = "categories" name="categories" onChange={e => setCategory(e.target.value)}> */}

        <select id = "categories" name="categories" onChange={handleCategory} > 

            {allCategories}
        </select>
        
        
        <br></br><br></br>

        <label htmlFor='level'>Select Difficulty Level: </label> 
        <select id='level' name='level' onChange={handleLevel}>
            <option value='easy'>Easy</option>
            <option value='medium'>Medium</option>
            <option value='hard'>Hard</option> 
        </select>

        <br></br><br></br>
        

        <input type="submit" value="Create Game"/>
        
    </form>
    )
};




