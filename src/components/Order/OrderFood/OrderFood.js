import React from 'react';

function OrderFood(props) {
    return <div>
        <p>{props.name}</p>
        <p>x{props.count}</p>
        <p>{props.total}KGS</p>
        <button type='button' onClick={props.removeFood} >
                    Удалить
                </button>
    </div>
}

export default OrderFood;