import React from 'react';

function Food(props) {
    return <div className="Food">
                <button type='button' onClick={props.onAddFood} >
                    <p>{props.name}</p>
                    <p>Цена: {props.price}</p>
                </button>
    </div>
}

export default Food;