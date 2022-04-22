import React from 'react';
import { useNavigate } from 'react-router-dom';

function Form({handleSubmit, updateInput}) {

    const goTo = useNavigate();

    return (
        <>
        <div className="whole">
        <form id="jForm" onSubmit={handleSubmit}>
            <label id="jLabel">ENTER ROOM ID/PIN</label>
            <input type="text" required id="jText" onChange={updateInput}/>
            <input type="submit" id="jSub" value="Submit" style={{cursor: 'pointer'}}/>
        </form>
        <div id="back">
        <button id='backBtn' onClick={() => goTo(-1)} style={{cursor: 'pointer'}}>Go Back</button>
        </div>
        </div>
        </>
    );
};

export default Form;
