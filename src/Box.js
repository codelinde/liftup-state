import React from 'react';

function Box (props) {
    return(
        <div className="boxes" style={{ backgroundColor: props.colorCode }}>
            {props.colorCode}
        </div>
    )
};

export default Box;