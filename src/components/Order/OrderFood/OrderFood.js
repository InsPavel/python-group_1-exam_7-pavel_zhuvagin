import React from 'react';
import './OrderFood.css'

function OrderFood(props) {
    return <div className="orderfood">
        <p className="namefood">{props.name}</p>
        <div className="orderall">
            <p>x{props.count}</p>
            <p>{props.total}KGS</p>
            <button className="removefood" type='button' onClick={props.onRemoveFood} ><i className="fas fa-times"/></button>
        </div>
    </div>
}

export default OrderFood;