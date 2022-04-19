import React, { useState } from 'react';

function NameForm() {

    const [ UserName, setUserName ] = useState("")

    const handleSubmit = e => {
        e.preventDefault();
        console.log(UserName);
    }

    const updateInput = e => {
        const input = e.target.value;
        setUserName(input);
    }


    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={updateInput}/>
            <input type="submit" value="Create User" />
        </form>
    );
};

export default NameForm;
