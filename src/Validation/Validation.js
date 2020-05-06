import React from 'react';

const validation = (props) => {

    let validationMessage = (props.inputLength <= 5) ?
            'Text too short!' : 'Text long enough!';

    return(
        <div>
            <p>{validationMessage}</p>
        </div>
    );
};

export default validation;