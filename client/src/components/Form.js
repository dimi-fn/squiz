import React, { useState } from 'react';

function Form({handleSubmit, updateInput}) {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={updateInput}/>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Form;
