import React from 'react';
import OrderFood from './OrderFood/OrderFood'

function Order(props) {
    let foods = [];

    for (let i = 0; i < props.foods.length; i++) {
        if(props.foods[i].count > 0){
            foods.push(<OrderFood
                name={props.menu[i].label}
                count={props.foods[i].count}
                total={props.foods[i].total}
                onRemoveFood={() => props.changeFood(props.foods[i].name, -1)}
            />)
        }
    }
    return <div className="order">
        <h3>Заказ</h3>
        {foods}
    </div>
}

export default Order;