import React from 'react';

function OrderFood(props) {
    return <div>
        <p>{props.name}</p>
        <p>{props.count}</p>
    </div>
}

export default OrderFood;