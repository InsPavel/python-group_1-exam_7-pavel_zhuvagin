import React from 'react';

function Total(props) {
    return <div>
        <p className="total">{props.getTotal()}</p>
    </div>
}

export default Total;