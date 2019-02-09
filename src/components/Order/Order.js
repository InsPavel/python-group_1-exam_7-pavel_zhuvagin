import React from 'react';
import OrderFood from './OrderFood/OrderFood'
import Total from "./Total/Total";

function Order(props) {
    let foods = [];

    for (let i = 0; i < props.foods.length; i++) {
        if(props.foods[i].count > 0){
            foods.push(<OrderFood
                key={props.foods[i].name}
                name={props.menu[i].label}
                count={props.foods[i].count}
                total={props.foods[i].total}
                onRemoveFood={() => props.changeFood(props.foods[i].name, -1)}
            />)
        }
    }
    return <div className="order">
        <h3>Заказ</h3>
        <div className="orderborder">
            {foods}
            <Total getTotal={props.getTotal}/>
        </div>
    </div>
}

export default Order;