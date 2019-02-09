import React from 'react';

function Food(props) {
    return <div className="Food">
        <p>{props.name}</p>
        <p>Цена: {props.price}</p>
    </div>
}

export default Food;