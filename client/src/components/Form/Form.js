import React from 'react';

function Form({handleSubmit, updateInput}) {
    return (
        <form id="jForm" onSubmit={handleSubmit}>
            <input type="text" id="jText" onChange={updateInput}/>
            <input type="submit" id="jSub" value="Submit" style={{cursor: 'pointer'}}/>
        </form>
    );
};

export default Form;
