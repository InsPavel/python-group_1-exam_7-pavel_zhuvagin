import React from 'react';

function OrderFood(props) {
    return <div>
        <p>{props.name}</p>
        <p>x{props.count}</p>
        <p>{props.total}</p>
    </div>
}

export default OrderFood;