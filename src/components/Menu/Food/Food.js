import React from 'react';

function Food(props) {
    return <div className="food">
                <button className="addfood" type='button' onClick={props.addFood} >
                    <i className="fas fa-utensils"/>
                    <h3>{props.name}</h3>
                    <p>Цена: {props.price}KGS</p>
                </button>
    </div>
}

export default Food;