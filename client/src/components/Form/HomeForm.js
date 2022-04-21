import React from 'react';
import './style.css'

function HomeForm({handleSubmit, updateInput, Create, Join}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={updateInput} placeholder="Create User Name"/>
            <input type="submit" value="Create Room" onClick={Create}/>
            <input type="submit" value="Join" onClick={Join}/>
        </form>
    );
};

export default HomeForm;
